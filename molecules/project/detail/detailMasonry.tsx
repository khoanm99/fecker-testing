import Close from '@/atoms/svg/close';
import { UploadFile, UploadFileEntity } from '@/graphql/generated';
import { useLockBody } from '@/hooks/useLockBody';
import { Maybe } from 'graphql/jsutils/Maybe';
import Image from 'next/image';
import { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ProjectCard from '../projectCard';

const DetailMasonry = ({ listImage }: { listImage: UploadFileEntity[] }) => {
  const [popupData, setPopupData] = useState<Maybe<UploadFile>>(null);
  useLockBody(popupData ? true : false);
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
      {popupData && popupData.url && (
        <div
          className={`fixed top-0 left-0 z-[51] h-screen w-full overflow-visible bg-black/60`}
        >
          <div
            className={`relative flex h-full w-full items-center justify-center px-5 lg:px-0`}
          >
            <div className={`relative py-7 lg:py-7 lg:px-7`}>
              <Close
                onClick={() => {
                  setPopupData && setPopupData(null);
                }}
                className={`absolute top-0 right-0 h-[20px] w-[20px] cursor-pointer`}
                color={`#39c66b`}
              />
              <Image
                src={popupData.url}
                alt={popupData.alternativeText ?? ''}
                width={popupData.width ?? 0}
                height={popupData.height ?? 0}
                className={`w-full object-contain`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
