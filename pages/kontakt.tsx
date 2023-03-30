import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_KONTACKT_SECTION } from '@/graphql/query/contactSection';
import ContactTemplate from '@/templates/ContactTemplate';
import {
  ComponentBasicSeo,
  ContactSectionEntityResponse
} from '@/graphql/generated';
import { getRevalidationTTL } from '@/utils/helpers';

interface IProps {
  dataResponse?: {
    contactSection?: ContactSectionEntityResponse;
  };
}

const Kontakt = ({ dataResponse }: IProps) => {
  const seo: ComponentBasicSeo | null =
    dataResponse?.contactSection?.data?.attributes?.seo || null;
  return (
    <DefaultLayout
      title={seo?.title || 'Fecker Holzbau AG'}
      description={seo?.description || ''}
    >
      {dataResponse && <ContactTemplate dataResponse={dataResponse} />}
    </DefaultLayout>
  );
};

export default Kontakt;

export const getStaticProps: GetStaticProps = async _context => {
  const apolloClient = initializeApollo();
  const rs: any = await apolloClient
    .query({
      query: GET_KONTACKT_SECTION,
      variables: {
        publicationState: _context.preview ? 'PREVIEW' : 'LIVE'
      }
    })
    .catch(() => {});
  return {
    props: {
      dataResponse: rs?.data || {}
    },
    revalidate: getRevalidationTTL()
  };
};
