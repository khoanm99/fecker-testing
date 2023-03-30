import Container from '@/components/container';
import Heading from '@/atoms/typo/heading';
import {
  ImpressumSection,
  ImpressumSectionEntityResponse,
  Maybe
} from '@/graphql/generated';

interface Props {
  dataResponse: {
    impressumSection: ImpressumSectionEntityResponse;
  };
}

const ImpressumTemplate = ({ dataResponse }: Props) => {
  const sectionData: Maybe<ImpressumSection> | undefined =
    dataResponse?.impressumSection?.data?.attributes;
  console.log('sectionData', sectionData);
  return (
    <div className={'pb-[60px]'}>
      <Container id={'impressum'} layout={'full'}>
        {!sectionData ||
          (sectionData.title && (
            <Heading
              size={`h1`}
              renderAs={`h1`}
              title={sectionData.title}
              className={`z-10 max-w-[195px] pb-6 pl-5 text-white lg:max-w-[630px] lg:pl-0`}
            />
          ))}
      </Container>
    </div>
  );
};
export default ImpressumTemplate;
