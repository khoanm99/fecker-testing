import { InnovationSectionEntityResponse } from '@/graphql/generated';
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
        </div>
      )}
    </>
  );
};

export default InnovationTemplate;
