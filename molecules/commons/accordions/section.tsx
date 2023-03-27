import PrimaryButton from '@/atoms/button';
import Text from '@/atoms/typo/text';
import { UploadFile } from '@/graphql/generated';
import Collapse from '@/molecules/collapse';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import AccordionContent from './content';
import AccordionHeader from './header';

interface Props {
  title?: string;
  layout?: 'Collapse' | 'Grid' | 'Markdown';
  image?: UploadFile;
  content?: string;
  index: number;
  url?: string;
}

const AccordionSection = ({
  title,
  layout,
  image,
  content,
  index,
  url
}: Props) => {
  const [expanded, setExpand] = useState<number>(-1);
  return (
    <div
      className={`border-b-[1px] border-solid border-black ${
        index == 0 ? ` border-t-[1px]` : ``
      }`}
    >
      {title && (
        <AccordionHeader
          index={index}
          title={title}
          expanded={expanded}
          setExpand={setExpand}
        />
      )}

      {
        <AccordionContent index={index} expanded={expanded}>
          {image && layout != 'Collapse' && (
            <>
              <div className={`flex flex-wrap pb-[16px] lg:mx-10 xl:mx-12`}>
                {renderImage({
                  image: image
                })}
                {layout == 'Grid' &&
                  content &&
                  renderGrid({
                    content: content,
                    url: url ?? ''
                  })}
                {layout == 'Markdown' &&
                  content &&
                  renderMarkdown({ content: content })}
              </div>
            </>
          )}
          {layout == `Collapse` && (
            <Collapse
              content={content}
              className={`max-w-[841px] pb-4 lg:mx-12`}
            />
          )}
        </AccordionContent>
      }
    </div>
  );
};

export default AccordionSection;

const renderImage = ({ image }: { image: UploadFile }) => {
  return (
    <>
      {image && image.url && (
        <Image
          src={image.url}
          alt={image.alternativeText ?? ''}
          width={image.width ?? 0}
          height={image.height ?? 0}
          className={`w-full lg:w-[65%]`}
        />
      )}
    </>
  );
};

const renderGrid = ({ content, url }: { content: string; url: string }) => {
  return (
    <div className={`w-full lg:w-[35%] lg:pl-7`}>
      <Text
        size={`bodyTextSmall`}
        content={content}
        className={`pb-[25px] lg:max-w-[305px] xl:pb-11`}
      />
      {url && (
        <Link href={url} title={`mehr erfahren`}>
          <PrimaryButton title={`mehr erfahren`} />
        </Link>
      )}
    </div>
  );
};

const renderMarkdown = ({ content }: { content: string }) => {
  return <ReactMarkdown className="custom-markdown">{content}</ReactMarkdown>;
};
