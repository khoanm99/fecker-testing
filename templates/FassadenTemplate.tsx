import { FassadenSectionEntityResponse } from '@/graphql/generated';
import IntroContent from '@/molecules/hero/heroIntroContent';
import HeroSection from '@/organisms/hero';

interface Props {
  dataResponse: {
    fassadenSection?: FassadenSectionEntityResponse;
  };
}

const FassadenTemplate = ({ dataResponse }: Props) => {
  const fassadenSection = dataResponse?.fassadenSection;
  const introContent = fassadenSection?.data?.attributes?.introContent;
  return (
    <>
      {dataResponse && fassadenSection && (
        <div className={'pb-[60px]'}>
          {fassadenSection.data?.attributes?.heroSlider && (
            <HeroSection
              heroSectionData={fassadenSection?.data?.attributes?.heroSlider}
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

export default FassadenTemplate;
