import DefaultLayout from 'components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  ComponentBasicSeo,
  DownloadSectionEntityResponse
} from '@/graphql/generated';
import { getRevalidationTTL } from '@/utils/helpers';
import { GET_DOWNLOAD_SECTION } from '@/graphql/query/downloadSection';
import MarkdownTemplate from '@/templates/MarkdownTemplate';

interface Props {
  dataResponse: {
    downloadSection: DownloadSectionEntityResponse;
  };
}

const Download = ({ dataResponse }: Props) => {
  const seo: ComponentBasicSeo | null =
    dataResponse.downloadSection?.data?.attributes?.seo || null;
  const sectionData = dataResponse?.downloadSection?.data?.attributes ?? null;
  return (
    <DefaultLayout
      title={seo?.title || 'Fecker Holzbau AG'}
      description={seo?.description || ''}
    >
      {sectionData && (
        <MarkdownTemplate
          title={sectionData.title ?? null}
          content={sectionData.content ?? null}
        />
      )}
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
