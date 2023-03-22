import Heading from '@/atoms/typo/heading';
import Text from '@/atoms/typo/text';
import { ILatLngCMS } from '@/models/molecules/map';
import InfoWindow from '@/molecules/infoWindow';
import Map from '@/molecules/map';
import Marker from '@/molecules/marker';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useEffect, useState } from 'react';

const ContactMap = ({ maker }: { maker: ILatLngCMS[] }) => {
  const render = (status: Status) => {
    return <Heading size={`h3`} title={status} renderAs={`h3`} />;
  };
  const [listMaker, setListMarker] = useState<ILatLngCMS[]>();
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(true);
  const [itemInfo, setItemInfo] = useState<ILatLngCMS | null>(null);

  const center = { lat: 47.49861601840052, lng: 9.420276747114341 };

  useEffect(() => {
    setListMarker(maker);
  }, [maker]);

  useEffect(() => {
    if (listMaker) {
      setItemInfo(listMaker[0]);
    }
  }, [listMaker]);

  return (
    <div className={`relative h-[570px] max-w-[950px]`}>
      <Wrapper
        apiKey={
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
          `AIzaSyCzW21O0QbysBjq12bCoOSSoAwhQfGq0Z0`
        }
        render={render}
      >
        <Map center={center} zoom={16} isOpenInfo={isOpenInfo}>
          {listMaker &&
            listMaker.length > 0 &&
            listMaker.map((itemMaker, key) => {
              if (itemMaker.attributes) {
                const position: google.maps.LatLngLiteral = {
                  lat: itemMaker.attributes.lat ?? 47.49861601840052,
                  lng: itemMaker.attributes.lng ?? 9.420276747114341
                };
                return (
                  <Marker
                    key={key}
                    position={position}
                    icon={'assets/icon/marker.svg'}
                    setIsOpenInfo={setIsOpenInfo}
                    isOpenInfo={isOpenInfo}
                    itemInfo={itemMaker}
                    setItemInfo={setItemInfo}
                  />
                );
              }
            })}
        </Map>
        {isOpenInfo && (
          <InfoWindow
            content={itemInfo?.attributes?.content}
            email={itemInfo?.attributes?.email}
            phone={itemInfo?.attributes?.phone}
          />
        )}
      </Wrapper>
    </div>
  );
};

export default ContactMap;
