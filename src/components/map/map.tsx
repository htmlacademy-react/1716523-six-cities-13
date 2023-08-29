import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const/const';
import { useRef, useEffect, memo } from 'react';
import useMap from '../../hooks/use-map';
import { City, Offer } from '../../types';

type MapProps = {
  city: City;
  offers: Offer[];
  activeCard: string | null;
};

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

function Map({offers, city, activeCard}: MapProps): React.JSX.Element {


  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {

    const markers = layerGroup();
    if (map && city) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
      offers.forEach((point) => {
        new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        }, {
          icon: activeCard === point.id ? currentCustomIcon : defaultCustomIcon
        })
          .addTo(markers);
      });
      markers.addTo(map);
    }
    return (() => {
      markers.clearLayers();
    });
  }, [map, offers, activeCard, city]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

const MapMemo = memo(Map);

export default MapMemo;
