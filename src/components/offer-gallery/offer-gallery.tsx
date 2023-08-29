

type OfferGalleryPrors = {
  imagesUrl: string[];
}

function OfferGallery({imagesUrl}: OfferGalleryPrors) {
  return (
    <div className="offer__gallery">
      {imagesUrl.map((imageUrl) =>
        (
          <div key={imageUrl} className="offer__image-wrapper">
            <img
              className="offer__image"
              src={imageUrl}
              alt="Photo studio"
            />
          </div>
        )
      )}
    </div>
  );
}

export default OfferGallery;
