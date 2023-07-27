import {Icon, Marker, layerGroup, leaflet} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const/const';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';

// type MapProps = {
//   city: City;
//   points: Points;
//   selectedPoint: Point | undefined;
// };

function Map({offers}): React.JSX.Element {
  // const {city, point, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 40],
    iconAnchor: [20, 40]
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [30, 40],
    iconAnchor: [20, 40]
  });

  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        new Marker({
            lat: point.location.latitude,
            lng: point.location.latitude,
          }, {
            icon: defaultCustomIcon
          })
          .addTo(map);
      });
    }
  }, [map, offers]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
