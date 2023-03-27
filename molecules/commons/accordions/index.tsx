import { useState } from 'react';
import AccordionHeader from './header';
import AccordionContent from './content';
import {
  ComponentAccordionAccordion,
  ComponentBasicButtonLink,
  Maybe,
  UploadFileEntityResponse
} from '@/graphql/generated';
import Collapse from '@/molecules/collapse';
import Image from 'next/image';
import Text from '@/atoms/typo/text';
import PrimaryButton from '@/atoms/button';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

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
                  {item.image && item.layout != 'Collapse' && (
                    <>
                      <div
                        className={`flex flex-wrap pb-[16px] lg:mx-10 xl:mx-12`}
                      >
                        {renderImage({
                          image: item.image
                        })}
                        {item.layout == 'Grid' &&
                          item.content &&
                          renderGrid({
                            content: item.content,
                            button: { id: '', url: ``, title: `` }
                          })}
                        {item.layout == 'Markdown' &&
                          item.content &&
                          renderMarkdown({ content: item.content })}
                      </div>
                    </>
                  )}
                  {item.layout == `Collapse` && (
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

const renderImage = ({ image }: { image: UploadFileEntityResponse }) => {
  const imageData = image.data?.attributes;
  return (
    <>
      {imageData && imageData.url && (
        <Image
          src={imageData.url}
          alt={imageData.alternativeText ?? ''}
          width={imageData.width ?? 0}
          height={imageData.height ?? 0}
          className={`w-full lg:w-[65%]`}
        />
      )}
    </>
  );
};

const renderGrid = ({
  content,
  button
}: {
  content: string;
  button: ComponentBasicButtonLink;
}) => {
  return (
    <div className={`w-full lg:w-[35%] lg:pl-7`}>
      <Text
        size={`bodyTextSmall`}
        content={content}
        className={`pb-[25px] lg:max-w-[305px] xl:pb-11`}
      />
      {button && button.url && (
        <Link href={button.url} title={button.title ?? ''}>
          <PrimaryButton title={button.title ?? ''} />
        </Link>
      )}
    </div>
  );
};

const renderMarkdown = ({ content }: { content: string }) => {
  return <ReactMarkdown className="custom-markdown">{content}</ReactMarkdown>;
};
