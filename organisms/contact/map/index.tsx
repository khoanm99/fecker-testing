import Heading from '@/atoms/typo/heading';
import InfoWindow from '@/molecules/infoWindow';
import Map from '@/molecules/map';
import Marker from '@/molecules/marker';
import { ILatLngCMS } from '@/types';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { useEffect, useState } from 'react';

const ContactMap = ({ maker }: { maker: ILatLngCMS[] }) => {
  const render = (status: Status) => {
    return <Heading size={`h3`} title={status} renderAs={`h3`} />;
  };
  const [listMaker, setListMarker] = useState<ILatLngCMS[]>();
  const [isOpenInfo, setIsOpenInfo] = useState<boolean>(true);
  const [itemInfo, setItemInfo] = useState<ILatLngCMS | null>(null);
  const [myMap, setMyMap] = useState<google.maps.Map>();
  const center = { lat: 47.49861601840052, lng: 9.420276747114341 };

  useEffect(() => {
    setListMarker(maker);
  }, [maker]);

  useEffect(() => {
    if (listMaker) {
      setItemInfo(listMaker[0]);
    }
  }, [listMaker]);

  const gotoCenter = () => {
    myMap && myMap.panTo(center);
  };

  return (
    <>
      <div
        className={`relative h-[200px] w-full max-w-[950px] lg:h-[570px] 2xl:h-[660px] 2xl:max-w-[1100px]`}
      >
        <Wrapper
          apiKey={
            process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ||
            `AIzaSyCzW21O0QbysBjq12bCoOSSoAwhQfGq0Z0`
          }
          render={render}
        >
          <Map
            center={center}
            zoom={16}
            isOpenInfo={isOpenInfo}
            myMap={myMap}
            setMyMap={setMyMap}
          >
            {listMaker &&
              itemInfo &&
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
                      myMap={myMap}
                      itemInfo={itemInfo}
                      gotoCenter={gotoCenter}
                    />
                  );
                }
              })}
          </Map>
        </Wrapper>
      </div>
      <InfoWindow
        content={maker[0].attributes?.content}
        phone={maker[0].attributes?.phone}
        email={maker[0].attributes?.email}
        className={`bg-transparent pl-0 lg:hidden`}
      />
    </>
  );
};

export default ContactMap;
