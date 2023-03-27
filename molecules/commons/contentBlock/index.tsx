import PrimaryButton from '@/atoms/button';
import Heading from '@/atoms/typo/heading';
import Text from '@/atoms/typo/text';
import { IContentBlock } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const ContentBlock = ({
  textBlockData,
  index,
  state = 'layout-right'
}: IContentBlock) => {
  const imageData = textBlockData?.image?.data?.attributes;
  return (
    <div
      className={`mx-auto flex flex-wrap overflow-hidden px-5 lg:px-0 ${
        state == 'layout-right' ? '' : 'justify-end lg:pt-[60px]'
      }`}
    >
      <div className="relative w-full lg:h-[705px] 2xl:h-[calc(100vh_-_106px)]">
        {imageData && imageData.url && imageData.width && imageData.height && (
          <div
            className={`absolute top-0 w-full pt-[93%] lg:w-[58%] lg:pt-[55%] ${
              state == 'layout-right' ? '' : 'right-0'
            }`}
          >
            <Image
              src={imageData.url}
              alt={imageData.alternativeText ?? ''}
              fill
              sizes="(max-width: 1023px) 100vw,
              (min-width: 1024px) 50vw"
              className={`object-cover`}
            />
          </div>
        )}
        {textBlockData &&
          textBlockData.title &&
          RenderBlockText({
            textBlockData,
            index,
            state
          })}
      </div>
    </div>
  );
};

export default ContentBlock;

const RenderBlockText = ({ textBlockData, index, state }: IContentBlock) => {
  const blockRight = `justify-end lg:bottom-0 lg:right-0`;
  const blockLeft = `justify-start`;
  return (
    <div
      className={`flex w-full ${
        state == 'layout-right' ? blockRight : blockLeft
      } lg:absolute lg:w-[55%]`}
    >
      <div
        className={`relative mt-[calc(100%_-_123px)] w-[280px] bg-beige pt-[10px] md:max-w-[400px] md:pt-8 lg:mt-0 lg:w-full lg:max-w-none lg:pt-[60px] lg:pb-[20px] xl:pb-[66px] ${
          state == 'layout-right'
            ? 'xl:pl-[88px]'
            : 'pr-5 xl:pl-[128px] 2xl:pl-[calc(100vw_*_0.1)] 2xl:pr-[50px]'
        }`}
      >
        {index && textBlockData && textBlockData.title && (
          <div className="relative pl-12 ">
            <Text
              size={`numberHome`}
              content={index < 10 ? '0' + index : `${index}`}
              className={`absolute top-0 left-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-black md:top-[33px] lg:static lg:h-[50px] lg:w-[50px]`}
            />
            <Heading
              size={`h2`}
              renderAs={`h2`}
              title={textBlockData.title}
              className={`pb-[5px] lg:pt-4 lg:pb-3`}
            />
          </div>
        )}

        {textBlockData && textBlockData.description && (
          <Text
            size={`bodyText`}
            renderAs={`p`}
            content={textBlockData.description}
            className={`pb-[30px] pl-12 lg:max-w-[465px] lg:pb-10  2xl:max-w-[525px]`}
          />
        )}
        {textBlockData && textBlockData.buttonLink && (
          <div className={`flex justify-end lg:justify-start lg:pl-[48px]`}>
            <Link
              href={textBlockData.buttonLink.url}
              title={textBlockData.buttonLink.title}
            >
              <PrimaryButton
                title={textBlockData.buttonLink.title}
                className={``}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
