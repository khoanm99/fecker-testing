import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import InfoWindow from '@/molecules/infoWindow';

interface Props extends google.maps.MarkerOptions {
  itemInfo?: any;
  setIsOpenInfo?: Function;
  isOpenInfo?: boolean;
  setItemInfo?: Function;
  myMap: google.maps.Map | undefined;
  gotoCenter?: Function;
}

const Marker = (options: Props) => {
  const [marker, setMarker] = useState<google.maps.Marker>();
  const [infowindow, setInfowindow] = useState<google.maps.InfoWindow>();
  const { myMap, itemInfo, gotoCenter } = options;
  const [isOpenInfowindow, setIsOpenInfowindow] = useState<boolean>(false);
  useEffect(() => {
    if (!marker) setMarker(new google.maps.Marker());
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (!infowindow)
      setInfowindow(
        new google.maps.InfoWindow({
          content: ReactDOMServer.renderToString(
            <InfoWindow
              content={itemInfo?.attributes?.content}
              email={itemInfo?.attributes?.email}
              phone={itemInfo?.attributes?.phone}
            />
          ),
          ariaLabel: 'Fecker'
        })
      );
  }, [infowindow]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  // Handle click maker
  useEffect(() => {
    if (infowindow) {
      if (isOpenInfowindow) {
        infowindow.close();
      } else {
        infowindow.open({
          anchor: marker,
          myMap
        } as any);
      }
    }

    if (marker) {
      const makerListener = google.maps.event.addListener(
        marker,
        'click',
        () => {
          gotoCenter && gotoCenter();
          setIsOpenInfowindow(!isOpenInfowindow);
        }
      );
      return () => {
        google.maps.event.removeListener(makerListener);
      };
    }
  }, [options, marker, infowindow, isOpenInfowindow]);

  return null;
};

export default Marker;
