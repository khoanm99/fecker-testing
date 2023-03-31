import Container from '@/components/container';
import Heading from '@/atoms/typo/heading';
import {
  ImpressumSection,
  ImpressumSectionEntityResponse,
  Maybe
} from '@/graphql/generated';
import Markdown from '@/atoms/markdown';

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
    <div className={'mt-[100px] pb-[60px]'}>
      <Container id={sectionData?.title ?? ''} layout={'full'}>
        {!sectionData ||
          (sectionData.title && (
            <Heading
              size={`h1`}
              renderAs={`h1`}
              title={sectionData.title}
              className={`z-10 max-w-[195px] pl-5 lg:max-w-[870px] lg:pl-0`}
            />
          ))}
      </Container>
      <Container layout="grid">
        {sectionData?.content && <Markdown content={sectionData?.content} />}
      </Container>
    </div>
  );
};
export default ImpressumTemplate;
