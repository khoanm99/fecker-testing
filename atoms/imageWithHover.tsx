import { ISiteImage } from '@/types';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import Text from './typo/text';

const ImageWithHover = ({
  title,
  description,
  image,
  variant,
  sharp = 'auto'
}: ISiteImage) => {
  const clsFill = `absolute top-0 left-0 h-full w-full hover:bg-emerald-400`;
  return (
    <>
      {image && image.url && (
        <>
          {sharp == 'fill' ? (
            <div className={clsFill}>
              <Image
                src={image.url}
                alt={image.alternativeText ?? ''}
                fill
                sizes={`"(max-width: 1023px) 100vw,
                (min-width: 1024px) 50vw"`}
                className={'object-cover object-center'}
                placeholder="blur"
                blurDataURL={'/assets/img/blur-image.png'}
              />
            </div>
          ) : (
            <Image
              src={image.url}
              alt={image.alternativeText ?? ''}
              width={image.width ?? 0}
              height={image.height ?? 0}
              className={`h-auto w-full`}
              placeholder="blur"
              blurDataURL={'/assets/img/blur-image.png'}
            />
          )}

          {title &&
            renderOverlay({ title: title, description: description, variant })}
        </>
      )}
    </>
  );
};

export default ImageWithHover;

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
