import DefaultLayout from 'components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  ComponentBasicSeo,
  ImpressumSectionEntityResponse
} from '@/graphql/generated';
import { getRevalidationTTL } from '@/utils/helpers';
import { GET_IMPRESSUM_SECTION } from '@/graphql/query/impressumSection';
import MarkdownTemplate from '@/templates/MarkdownTemplate';

interface Props {
  dataResponse: {
    impressumSection: ImpressumSectionEntityResponse;
  };
}

const Impressum = ({ dataResponse }: Props) => {
  const seo: ComponentBasicSeo | null =
    dataResponse.impressumSection?.data?.attributes?.seo || null;
  const sectionData = dataResponse?.impressumSection?.data?.attributes ?? null;
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

export default Impressum;

export const getStaticProps: GetStaticProps = async _context => {
  const apolloClient = initializeApollo();

  const rs: any = await apolloClient
    .query({
      query: GET_IMPRESSUM_SECTION,
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
