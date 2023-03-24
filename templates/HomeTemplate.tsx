import { HomeSectionEntityResponse } from '@/graphql/generated';
import IntroContent from '@/molecules/hero/heroIntroContent';
import ListContentBlock from '@/organisms/commons/ContentBlock';
import HeroSection from '@/organisms/hero';

interface Props {
  dataResponse: {
    homeSection: HomeSectionEntityResponse;
  };
}

const HomeTemplate = ({ dataResponse }: Props) => {
  const homeSection = dataResponse?.homeSection;
  const introContent = homeSection?.data?.attributes?.introContent;
  return (
    <>
      {dataResponse && homeSection && (
        <div className={'pb-[60px]'}>
          {homeSection && homeSection.data?.attributes?.heroSlider && (
            <HeroSection
              heroSectionData={homeSection.data?.attributes?.heroSlider}
              templateName={`home`}
            />
          )}

          {introContent && (
            <IntroContent introContent={introContent} templateName={`home`} />
          )}
          {homeSection.data?.attributes?.contents &&
            homeSection.data?.attributes?.contents.map((itemContent, key) => {
              if (
                itemContent?.__typename == 'ComponentContentTextBlocks' &&
                itemContent.textBlocks
              ) {
                return (
                  <ListContentBlock
                    key={key}
                    textBlock={itemContent.textBlocks}
                  />
                );
              }
            })}
        </div>
      )}
    </>
  );
};

export default HomeTemplate;
