import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_KONTACKT_SECTION } from '@/graphql/query/contactSection';
import ContactTemplate from '@/templates/ContactTemplate';
import { ContactSectionEntityResponse } from '@/graphql/generated';
import { getRevalidationTTL } from '@/utils/helpers';

interface IProps {
  dataResponse?: {
    contactSection?: ContactSectionEntityResponse;
  };
}

const Kontakt = ({ dataResponse }: IProps) => {
  return (
    <DefaultLayout>
      {dataResponse && <ContactTemplate dataResponse={dataResponse} />}
    </DefaultLayout>
  );
};

export default Kontakt;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const rs: any = await apolloClient
    .query({
      query: GET_KONTACKT_SECTION
    })
    .catch(() => {});
  return {
    props: {
      dataResponse: rs?.data || {}
    },
    revalidate: getRevalidationTTL()
  };
};
