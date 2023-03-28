import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { ReferenceSectionEntityResponse } from '@/graphql/generated';
import OverViewProjectTemplate from '@/templates/OverViewProjectTemplate';
import { GET_REFERENCE_SECTION } from '@/graphql/query/referenceSection';

interface Props {
  dataResponse: {
    referenceSection: ReferenceSectionEntityResponse;
  };
}

const Referenzen = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout title={'Fecker Holzbau AG'} description={'Lorem Ipsum...'}>
      {dataResponse && (
        <OverViewProjectTemplate
          heroSlider={
            dataResponse.referenceSection?.data?.attributes?.heroSlider ??
            undefined
          }
          introContent={
            dataResponse.referenceSection?.data?.attributes?.introContent ??
            undefined
          }
          content={
            dataResponse.referenceSection?.data?.attributes?.contents ??
            undefined
          }
        />
      )}
    </DefaultLayout>
  );
};

export default Referenzen;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const rs: any = await apolloClient
    .query({
      query: GET_REFERENCE_SECTION
    })
    .catch(() => {});

  return {
    props: {
      dataResponse: rs?.data ?? {}
    }
  };
};
