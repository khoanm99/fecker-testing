import { IContentBlock } from '@/models/molecules/contentBlock';
import ContentBlock from '@/molecules/commons/contentBlock';

const ListContentBlock = ({ list }: { list: IContentBlock[] }) => {
  return (
    <div className={`space-y-[100px] lg:space-y-[155px]`}>
      {list &&
        list.map((item, key) => (
          <ContentBlock
            title={item.title}
            description={item.description}
            image={item.image}
            buttonLink={item.buttonLink}
            state={(key + 1) % 2 == 0 ? 'layout-left' : 'layout-right'}
            index={key + 1}
            key={key}
          />
        ))}
    </div>
  );
};

export default ListContentBlock;
