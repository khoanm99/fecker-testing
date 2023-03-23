import { HomeSectionEntityResponse } from '@/graphql/generated';
import ListContentBlock from '@/organisms/commons/ContentBlock';
import HeroSection from '@/organisms/hero';

interface Props {
  dataResponse: HomeSectionEntityResponse;
}

const HomeTemplate = ({ dataResponse }: Props) => {
  return (
    <div className={'pb-[60px]'}>
      {dataResponse.data?.attributes?.heroSlider && (
        <HeroSection
          heroSectionData={dataResponse.data.attributes.heroSlider}
          introContent={dataResponse.data.attributes.introContent ?? undefined}
          templateName="home"
        />
      )}
      {dataResponse.data?.attributes?.contents &&
        dataResponse.data?.attributes?.contents.map((itemContent, key) => {
          if (
            itemContent?.__typename == 'ComponentContentTextBlocks' &&
            itemContent.textBlocks
          ) {
            return (
              <ListContentBlock key={key} textBlock={itemContent.textBlocks} />
            );
          }
        })}
    </div>
  );
};

export default HomeTemplate;
