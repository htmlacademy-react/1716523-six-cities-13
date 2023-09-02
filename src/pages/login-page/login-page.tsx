import Logo from '../../components/logo/logo';
import { Helmet } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus, Titles } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { Link, Navigate } from 'react-router-dom';
import { FormEvent, useRef, useState } from 'react';
import { loginAction } from '../../store/api-action';
import { getCity } from '../../store/app-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function LoginPage(): React.JSX.Element {

  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [passwordLength, setPasswordLenght] = useState<number>(0);

  const authStatus = useAppSelector(getAuthorizationStatus);

  const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handlePasswordChange = () => {
    setIsPasswordValid(passRegEx.test((passwordRef.current?.value) as string));
    setPasswordLenght((passwordRef.current?.value.length) as number);
  };

  const dispatch = useAppDispatch();

  const currentCity = useAppSelector(getCity);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && isPasswordValid) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  if (authStatus !== AuthorizationStatus.Auth) {
    return (
      <div className="page page--gray page--login">
        <Helmet>
          <title>{Titles.LoginTitle}</title>
        </Helmet>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
            </div>
          </div>
        </header>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form
                className="login__form form"
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={loginRef}
                    className="login__input form__input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={passwordRef}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    onInput={handlePasswordChange}
                  />
                  {!isPasswordValid && passwordLength ? <p>Password must contains letters and numbers</p> : ''}
                </div>
                <button
                  className="login__submit form__submit button"
                  type="submit"
                >
              Sign in
                </button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="/">
                  <span>{currentCity}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <Navigate to={AppRoute.Root} />
    );
  }
}

export default LoginPage;
