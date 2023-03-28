import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { ReferenceSectionEntityResponse } from '@/graphql/generated';
import OverViewProjectTemplate from '@/templates/OverViewProjectTemplate';
import { GET_REFERENCE_SECTION } from '@/graphql/query/referenceSection';
import { getRevalidationTTL } from '@/utils/helpers';

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
            dataResponse.referenceSection?.data?.attributes?.heroSlider ?? null
          }
          introContent={
            dataResponse.referenceSection?.data?.attributes?.introContent ??
            null
          }
          content={
            dataResponse.referenceSection?.data?.attributes?.contents ?? []
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
    .catch(e => {
      console.log('e', e);
    });

  return {
    props: {
      dataResponse: rs?.data ?? {},
      revalidate: getRevalidationTTL()
    }
  };
};
