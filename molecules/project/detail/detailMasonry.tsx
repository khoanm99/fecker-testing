import Close from '@/atoms/svg/close';
import { UploadFile, UploadFileEntity } from '@/graphql/generated';
import { useLockScroll } from '@/hooks/useLockBody';
import { Maybe } from 'graphql/jsutils/Maybe';
import Image from 'next/image';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ProjectCard from '../projectCard';

const DetailMasonry = ({ listImage }: { listImage: UploadFileEntity[] }) => {
  const [popupData, setPopupData] = useState<Maybe<UploadFile>>(null);
  useLockScroll(popupData ? true : false);
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 1023: 2 }}>
        <Masonry gutter={`30px`} className={`max-[1023px]:[&>div]:!gap-[20px]`}>
          {listImage.map((itemTeam, key: number) => {
            return (
              <div
                key={key}
                onClick={() => {
                  setPopupData(itemTeam.attributes);
                }}
              >
                <ProjectCard dataImage={itemTeam.attributes ?? null} />
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      {renderPopup({ popupData: popupData, setPopupData: setPopupData })}
    </>
  );
};

export default DetailMasonry;

const renderPopup = ({
  popupData,
  setPopupData
}: {
  popupData: Maybe<UploadFile> | null;
  setPopupData: Function;
}) => {
  return (
    <>
      {popupData && popupData.url && popupData.width && popupData.height && (
        <div
          className={`fixed top-0 left-0 z-[51] h-screen w-full overflow-visible bg-black/80`}
        >
          <div
            className={`relative flex h-full w-full items-center justify-center px-5`}
          >
            <Close
              onClick={() => {
                setPopupData && setPopupData(null);
              }}
              className={`absolute top-[20px] right-[20px] h-[26px] w-[26px] cursor-pointer lg:top-[25px] lg:right-[25px]`}
              color={`#39c66b`}
            />
            <div className={`relative md:px-[40px]`}>
              <Image
                src={popupData.url}
                alt={popupData.alternativeText ?? ''}
                width={popupData.width}
                height={popupData.height}
                className={`h-[80vh] w-auto object-contain`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
