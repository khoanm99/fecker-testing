import Container from '@/components/container';
import { InnovationSectionEntityResponse } from '@/graphql/generated';
import Accordion from '@/molecules/commons/accordions';
import IntroContent from '@/molecules/hero/heroIntroContent';
import HeroSection from '@/organisms/hero';

interface Props {
  dataResponse: {
    innovationSection: InnovationSectionEntityResponse;
  };
}

const InnovationTemplate = ({ dataResponse }: Props) => {
  const innovationSection = dataResponse.innovationSection;
  const introContent = innovationSection?.data?.attributes?.introContent;
  const contents = innovationSection.data?.attributes?.contents;
  return (
    <>
      {dataResponse && innovationSection && (
        <div className={'pb-[60px]'}>
          {innovationSection.data?.attributes?.heroSlider && (
            <HeroSection
              heroSectionData={innovationSection?.data?.attributes?.heroSlider}
              templateName={`subPage`}
            />
          )}
          {introContent && (
            <IntroContent introContent={introContent} templateName="subPage" />
          )}
          {contents &&
            contents.map((itemContent, key) => {
              if (
                itemContent?.__typename == `ComponentContentAccordions` &&
                itemContent.accordions
              ) {
                return (
                  <Container layout={'grid'} key={key}>
                    <Accordion list={itemContent.accordions} />
                  </Container>
                );
              }
            })}
        </div>
      )}
    </>
  );
};

export default InnovationTemplate;
