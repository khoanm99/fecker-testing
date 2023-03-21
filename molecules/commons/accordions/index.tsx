import { IAccordion } from '@/models/molecules/accordions';
import { useState } from 'react';
import AccordionHeader from './header';
import AccordionContent from './content';

const Accordion = ({ list }: IAccordion) => {
  const [expanded, setExpand] = useState<number>(-1);

  return (
    <>
      {list && list.length > 0 && (
        <>
          {list.map((item, key) => (
            <div
              key={key}
              className={`border-b-[1px] border-solid border-black ${
                key == 0 ? ` border-t-[1px]` : ``
              }`}
            >
              {item.title && (
                <AccordionHeader
                  index={key}
                  title={item.title}
                  expanded={expanded}
                  setExpand={setExpand}
                />
              )}
              {item.item && (
                <AccordionContent
                  index={key}
                  data={item.item}
                  expanded={expanded}
                />
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Accordion;
