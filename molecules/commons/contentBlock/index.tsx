import PrimaryButton from '@/atoms/button';
import Heading from '@/atoms/Typo/heading';
import Text from '@/atoms/Typo/text';
import { IContentBlock } from '@/models/molecules/contentBlock';
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
      className={`relative mx-auto flex max-w-[1440px] flex-wrap px-5 lg:px-0 ${
        state == 'layout-right' ? '' : 'justify-end lg:pt-[60px]'
      }`}
    >
      {imageData && imageData.url && imageData.width && imageData.height && (
        <Image
          src={imageData.url}
          alt={imageData.alternativeText ?? ''}
          width={755}
          height={(imageData.height * 755) / imageData.width}
        />
      )}
      {textBlockData &&
        textBlockData.title &&
        RenderBlockText({
          textBlockData,
          index,
          state
        })}
    </div>
  );
};

export default ContentBlock;

const RenderBlockText = ({ textBlockData, index, state }: IContentBlock) => {
  const blockRight = `justify-end lg:bottom-0 lg:right-[50px] 2xl:right-[56px]`;
  const blockLeft = `justify-start lg:top-0 lg:left-0`;
  return (
    <div
      className={`flex w-full ${
        state == 'layout-right' ? blockRight : blockLeft
      } lg:absolute `}
    >
      <div
        className={`relative mt-[-123px] max-w-[280px] bg-beige pl-12 pt-[10px] md:max-w-[400px] md:pt-8 lg:mt-0 lg:w-[640px] lg:max-w-none  lg:pt-[60px] lg:pb-[66px] 2xl:w-[770px] ${
          state == 'layout-right'
            ? 'lg:pl-[88px]'
            : 'pr-5 lg:pl-[128px] 2xl:pl-[144px] 2xl:pr-[50px]'
        }`}
      >
        {index && (
          <Text
            size={`numberHome`}
            content={index < 10 ? '0' + index : `${index}`}
            className={`absolute top-[10px] left-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-black md:top-[33px] lg:static lg:h-[50px] lg:w-[50px]`}
          />
        )}
        {textBlockData && textBlockData.title && (
          <Heading
            size={`h2`}
            renderAs={`h2`}
            title={textBlockData.title}
            className={`pb-[5px] lg:pt-4 lg:pb-3`}
          />
        )}
        {textBlockData && textBlockData.description && (
          <Text
            size={`bodyText`}
            renderAs={`p`}
            content={textBlockData.description}
            className={`pb-[30px] lg:max-w-[465px] lg:pb-10 2xl:max-w-[525px]`}
          />
        )}
        {textBlockData && textBlockData.buttonLink && (
          <Link
            href={textBlockData.buttonLink.url}
            title={textBlockData.buttonLink.title}
          >
            <PrimaryButton
              title={textBlockData.buttonLink.title}
              className={``}
            />
          </Link>
        )}
      </div>
    </div>
  );
};
