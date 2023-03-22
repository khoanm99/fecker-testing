import { FassadenSectionEntityResponse } from '@/graphql/generated';
import HeroSection from '@/organisms/hero';

interface Props {
  dataResponse: FassadenSectionEntityResponse;
}

const FassadenTemplate = ({ dataResponse }: Props) => {
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

export default FassadenTemplate;
