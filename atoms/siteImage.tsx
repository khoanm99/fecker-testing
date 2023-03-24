import { ISiteImage } from '@/models/common';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Text from './typo/text';

const SiteImage = ({
  title,
  description,
  image,
  variant,
  layout
}: ISiteImage) => {
  const clsLandscape = `lg:pt-[71%]`;
  const clsPortrait = `lg:w-[72%] lg:pt-[100%]`;
  return (
    <>
      {image && image.url && (
        <div
          className={`group relative w-full pt-[112%] ${
            layout == 'layout-landscape' ? clsLandscape : clsPortrait
          }`}
        >
          <div
            className={`absolute top-0 left-0 h-full w-full hover:bg-emerald-400`}
          >
            <Image
              src={image.url}
              alt={image.alternativeText ?? ''}
              fill
              className={`object-cover object-center`}
            />
          </div>
          {title &&
            renderOverlay({ title: title, description: description, variant })}
        </div>
      )}
    </>
  );
};

export default SiteImage;

const renderOverlay = ({
  title,
  description,
  variant = 'green'
}: {
  title: string;
  description?: string;
  variant?: 'green' | 'black';
}) => {
  const clsBg = `group-hover:bg-[#39C66B]/40 absolute top-0 left-0 h-full w-full bg-transparent transition-colors duration-300`;
  const clsBgBlack = `group-hover:bg-black/60`;
  return (
    <div className={`absolute top-0 left-0 z-10 h-full w-full`}>
      <div
        className={`relative z-10 px-9 pt-11 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      >
        {title && (
          <Text
            size={`textOnPicture`}
            content={title}
            className={`text-white`}
          />
        )}
        {description && (
          <Text
            size={`bodyTextSmall`}
            content={description}
            className={`pt-[5px] text-white`}
          />
        )}
      </div>
      <div className={twMerge(clsBg, variant == 'black' ? clsBgBlack : '')} />
    </div>
  );
};
