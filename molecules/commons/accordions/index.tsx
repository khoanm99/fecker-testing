import { useState } from 'react';
import AccordionHeader from './header';
import AccordionContent from './content';
import {
  ComponentAccordionAccordion,
  Maybe,
  UploadFileEntityResponse
} from '@/graphql/generated';
import Collapse from '@/molecules/collapse';
import Image from 'next/image';
import Text from '@/atoms/typo/text';
import PrimaryButton from '@/atoms/button';
import Link from 'next/link';

const Accordion = ({
  list,
  className
}: {
  list: Maybe<ComponentAccordionAccordion>[];
  className?: string;
}) => {
  const [expanded, setExpand] = useState<number>(-1);

  return (
    <>
      {list && list.length > 0 && (
        <div className={className}>
          {list.map((item, key) => (
            <div
              key={key}
              className={`border-b-[1px] border-solid border-black ${
                key == 0 ? ` border-t-[1px]` : ``
              }`}
            >
              {item && item.title && (
                <AccordionHeader
                  index={key}
                  title={item.title}
                  expanded={expanded}
                  setExpand={setExpand}
                />
              )}
              {item && (
                <AccordionContent index={key} expanded={expanded}>
                  {item.image &&
                    renderImage({ image: item.image, layout: `layout-grid` })}
                  {true && (
                    <Collapse
                      content={item.content}
                      className={`max-w-[841px] pb-4 lg:mx-12`}
                    />
                  )}
                </AccordionContent>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Accordion;

const renderImage = ({
  image,
  layout = 'layout-grid'
}: {
  image: UploadFileEntityResponse;
  layout: 'layout-grid' | 'layout-markdown';
}) => {
  const imageData = image.data?.attributes;
  const clsGrid = `flex flex-wrap pb-4 lg:mx-12`;
  const clsMarkdown = `max-w-[841px] pb-4 lg:mx-12`;
  return (
    <div
      className={`pb-[16px] ${layout == `layout-grid` ? clsGrid : clsMarkdown}`}
    >
      {imageData && imageData.url && (
        <Image
          src={imageData.url}
          alt={imageData.alternativeText ?? ''}
          width={imageData.width ?? 0}
          height={imageData.height ?? 0}
          className={`w-full lg:w-[65%]`}
        />
      )}

      {imageData && layout == 'layout-grid' && (
        <div className={`w-full lg:w-[35%] lg:px-7`}>
          <Text
            size={`bodyTextSmall`}
            content={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. `}
            className={`pb-[25px] lg:max-w-[305px] xl:pb-11`}
          />
          <Link href={`/`} title={`mehr erfahren`}>
            <PrimaryButton title={`mehr erfahren`} />
          </Link>
        </div>
      )}
      {/* {button && button } */}
    </div>
  );
};
