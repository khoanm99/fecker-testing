import { ReactNode, useState } from 'react';
import AccordionHeader from './header';
import AccordionContent from './content';
import { ComponentAccordionAccordion, Maybe } from '@/graphql/generated';
import { twMerge } from 'tailwind-merge';
import Collapse from '@/molecules/collapse';

const Accordion = ({
  list
}: {
  list: Maybe<ComponentAccordionAccordion>[];
}) => {
  const [expanded, setExpand] = useState<number>(-1);

  return (
    <>
      {list && list.length > 0 && (
        <div className={twMerge(`px-5 lg:px-20`)}>
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
                  <Collapse content={item.content} className={`pb-4`} />
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
