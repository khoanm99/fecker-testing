import PrimaryButton from '@/atoms/button';
import Heading from '@/atoms/Typo/heading';
import Text from '@/atoms/Typo/text';
import { IButtonLink } from '@/models/common';
import { IContentBlock } from '@/models/molecules/contentBlock';
import Image from 'next/image';
import Link from 'next/link';

const ContentBlock = ({
  title,
  description,
  image,
  buttonLink,
  index,
  state = 'left'
}: IContentBlock) => {
  return (
    <div className={`relative flex flex-wrap px-5 lg:px-0`}>
      {image && image.url && (
        <Image
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
        />
      )}
      {title &&
        RenderBlockText({ title, description, buttonLink, index, state })}
    </div>
  );
};

export default ContentBlock;

const RenderBlockText = ({
  title,
  description,
  buttonLink,
  index,
  state
}: IContentBlock) => {
  return (
    <div
      className={`flex w-full ${
        state == 'left' ? 'justify-end' : 'justify-start'
      } lg:absolute lg:top-[100px]`}
    >
      <div className="relative mt-[-123px] max-w-[290px] bg-beige pl-12 pt-7 pr-5 md:max-w-[400px] lg:mt-0 lg:max-w-[640px] lg:pl-[88px] lg:pt-[60px]">
        {index && (
          <Text
            size={`numberHome`}
            content={index < 10 ? '0' + index : `${index}`}
            className={`absolute top-[10px] left-[10px] flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-black lg:static lg:h-[50px] lg:w-[50px]`}
          />
        )}
        {title && (
          <Heading
            size={`h2`}
            renderAs={`h2`}
            title={title}
            className={`pb-[5px]`}
          />
        )}
        {description && (
          <Text
            size={`bodyText`}
            renderAs={`p`}
            content={description}
            className={`pb-[30px]`}
          />
        )}
        {buttonLink && (
          <Link href={buttonLink.url} title={buttonLink.title}>
            <PrimaryButton title={buttonLink.title} />
          </Link>
        )}
      </div>
    </div>
  );
};
