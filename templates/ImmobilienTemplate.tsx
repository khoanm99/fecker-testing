import IntroContent from '@/molecules/hero/heroIntroContent';
import ListContentBlock from '@/organisms/commons/ContentBlock';
import HeroSection from '@/organisms/slider/hero';
import Container from '@/components/container';

import { HomeSectionEntityResponse } from '@/graphql/generated';

interface Props {
  dataResponse: {
    homeSection: HomeSectionEntityResponse;
  };
}

const introContentSample = {
  id: '0',
  title: 'wir bauen ',
  description: 'hochwertig',
  content:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
};

const ImmobilienTemplate = ({ dataResponse }: Props) => {
  const homeSection = dataResponse?.homeSection;
  const introContent = homeSection?.data?.attributes?.introContent;
  return (
    <>
      {dataResponse && homeSection && (
        <div className={'pb-[60px]'}>
          {homeSection && homeSection.data?.attributes?.heroSlider && (
            <HeroSection
              heroSectionData={homeSection.data?.attributes?.heroSlider}
              templateName={`subPage`}
            />
          )}

          {introContent && (
            <IntroContent
              introContent={introContentSample}
              templateName={`subPage`}
            />
          )}
          {homeSection.data?.attributes?.contents &&
            homeSection.data?.attributes?.contents.map((itemContent, key) => {
              if (
                itemContent?.__typename == 'ComponentContentTextBlocks' &&
                itemContent.textBlocks
              ) {
                return (
                  <Container layout={'full'} key={key}>
                    <ListContentBlock textBlock={itemContent.textBlocks} />
                  </Container>
                );
              }
            })}
        </div>
      )}
    </>
  );
};

export default ImmobilienTemplate;
