import { ComponentBasicTextBlock, Maybe } from '@/graphql/generated';
import ContentBlock from '@/molecules/commons/contentBlock';

const ListContentBlock = ({
  textBlock
}: {
  textBlock: Maybe<ComponentBasicTextBlock>[];
}) => {
  return (
    <div className={`space-y-[100px] lg:space-y-[155px]`}>
      {textBlock &&
        textBlock.map((item, key) => (
          <ContentBlock
            textBlockData={item}
            state={(key + 1) % 2 == 0 ? 'layout-left' : 'layout-right'}
            index={key + 1}
            key={key}
          />
        ))}
    </div>
  );
};

export default ListContentBlock;
