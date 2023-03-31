import DefaultLayout from 'components/DefaultLayout';
import ImmobilienTemplate from 'templates/ImmobilienTemplate';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  ComponentBasicSeo,
  DownloadSectionEntityResponse,
  ImpressumSectionEntityResponse
} from '@/graphql/generated';
import { getRevalidationTTL } from '@/utils/helpers';
import { GET_IMPRESSUM_SECTION } from '@/graphql/query/impressumSection';
import ImpressumTemplate from '@/templates/ImpressumTemplate';
import { GET_DOWNLOAD_SECTION } from '@/graphql/query/downloadSection';

interface Props {
  dataResponse: {
    downloadSection: DownloadSectionEntityResponse;
  };
}

const Download = ({ dataResponse }: Props) => {
  const seo: ComponentBasicSeo | null =
    dataResponse.downloadSection?.data?.attributes?.seo || null;
  console.log('dataResponse', dataResponse);
  return (
    <DefaultLayout
      title={seo?.title || 'Fecker Holzbau AG'}
      description={seo?.description || ''}
    >
      Download
    </DefaultLayout>
  );
};

export default Download;

export const getStaticProps: GetStaticProps = async _context => {
  const apolloClient = initializeApollo();

  const rs: any = await apolloClient
    .query({
      query: GET_DOWNLOAD_SECTION,
      variables: {
        publicationState: _context.preview ? 'PREVIEW' : 'LIVE'
      }
    })
    .catch(() => {});

  return {
    props: {
      dataResponse: rs?.data ?? {}
    },
    revalidate: getRevalidationTTL()
  };
};
