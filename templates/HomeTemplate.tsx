import { HomeSectionEntityResponse } from '@/graphql/generated';
import ListContentBlock from '@/organisms/commons/ContentBlock';

interface Props {
  dataResponse: HomeSectionEntityResponse;
}

const HomeTemplate = ({ dataResponse }: Props) => {
  return (
    <div className={'py-[60px]'}>
      {dataResponse.data?.attributes?.textBlock && (
        <ListContentBlock
          textBlock={dataResponse.data?.attributes?.textBlock}
        />
      )}
    </div>
  );
};

export default HomeTemplate;
