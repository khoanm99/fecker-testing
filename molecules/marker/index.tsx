import { ILatLngCMS } from '@/models/molecules/map';
import { useEffect, useState } from 'react';

interface Props extends google.maps.MarkerOptions {
  itemInfo?: ILatLngCMS | null;
  setIsOpenInfo?: Function;
  isOpenInfo?: boolean;
  setItemInfo?: Function;
}

const Marker = (options: Props) => {
  const [marker, setMarker] = useState<google.maps.Marker>();
  useEffect(() => {
    if (!marker) setMarker(new google.maps.Marker());
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  // Handle click maker
  useEffect(() => {
    if (marker) {
      const makerListener = google.maps.event.addListener(
        marker,
        'click',
        () => {
          if (!options.setItemInfo) return;
          if (options.isOpenInfo && options.itemInfo) {
            options.setItemInfo(options.itemInfo);
          } else {
            options.setItemInfo(null);
          }

          if (options.setIsOpenInfo) {
            options.setIsOpenInfo(!options.isOpenInfo);
          }
        }
      );
      return () => {
        google.maps.event.removeListener(makerListener);
      };
    }
  }, [options, marker]);

  return null;
};

export default Marker;
