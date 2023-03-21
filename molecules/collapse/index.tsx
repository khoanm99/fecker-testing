import Text from '@/atoms/Typo/text';
import { useEffect, useRef, useState } from 'react';

const Collapse = ({ content }: { content: string[] }) => {
  const refContent = useRef<HTMLDivElement>(null);
  const [expanded, setExpand] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const [showExpand, setShowExpand] = useState<boolean>(false);
  const handleCollapse = () => {
    if (refContent && refContent.current && window) {
      const maxHeightContent = calcMaxHeight();
      if (!expanded) {
        setMaxHeight(refContent.current.clientHeight);
      } else {
        setMaxHeight(maxHeightContent);
      }
      setExpand(!expanded);
    }
  };
  const checkContentHeight = () => {
    if (content && content.length > 1 && refContent && refContent.current) {
      if (refContent.current.clientHeight > calcMaxHeight()) {
        setShowExpand(true);
      }
    }
  };

  useEffect(() => {
    checkContentHeight();
    setMaxHeight(calcMaxHeight());
  }, []);

  return (
    <div>
      <div
        className={`mb-6 overflow-hidden transition-all duration-300 lg:mb-[30px] `}
        style={{ maxHeight: maxHeight }}
      >
        <div ref={refContent} className={`space-y-6  lg:space-y-[30px]`}>
          {content.length > 0 &&
            content.map((item, key) => (
              <Text size={`bodyText`} renderAs={`p`} content={item} key={key} />
            ))}
        </div>
      </div>
      {showExpand && (
        <Text
          size={`btn`}
          content={expanded ? '... weniger lesen' : '... mehr lesen'}
          className={`cursor-pointer text-primary`}
          renderAs={`span`}
          onClick={() => handleCollapse()}
        />
      )}
    </div>
  );
};

const calcMaxHeight = () => {
  let maxHeight = 30 * 6;
  if (window.innerWidth < 1024) {
    maxHeight = 24 * 6;
  }

  return maxHeight;
};

export default Collapse;
