import { InnovationSectionEntityResponse } from '@/graphql/generated';
import HeroSection from '@/organisms/hero';

interface Props {
  dataResponse: InnovationSectionEntityResponse;
}

const InnovationTemplate = ({ dataResponse }: Props) => {
  return (
    <div className={'pb-[60px]'}>
      {dataResponse.data?.attributes?.heroSlider && (
        <HeroSection
          heroSectionData={dataResponse.data.attributes.heroSlider}
        />
      )}
    </div>
  );
};

export default InnovationTemplate;
