import DefaultLayout from 'components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  ComponentBasicSeo,
  ProjectSectionEntityResponse,
  RentSellSectionEntityResponse
} from '@/graphql/generated';
import { GET_RENT_SELL_SECTION } from '@/graphql/query/rentSellSection';
import OverViewProjectTemplate from '@/templates/OverViewProjectTemplate';
import { getRevalidationTTL } from '@/utils/helpers';

interface Props {
  dataResponse: {
    rentSellSection: RentSellSectionEntityResponse;
  };
}

const VermietenVerkaufen = ({ dataResponse }: Props) => {
  const seo: ComponentBasicSeo | null =
    dataResponse.rentSellSection.data?.attributes?.seo || null;
  return (
    <DefaultLayout
      title={seo?.title || 'Fecker Holzbau AG'}
      description={seo?.description || ''}
    >
      {dataResponse && (
        <OverViewProjectTemplate
          heroSlider={
            dataResponse.rentSellSection?.data?.attributes?.heroSlider ?? null
          }
          introContent={
            dataResponse.rentSellSection?.data?.attributes?.introContent ?? null
          }
          content={
            dataResponse.rentSellSection?.data?.attributes?.contents ?? []
          }
        />
      )}
    </DefaultLayout>
  );
};

export default VermietenVerkaufen;

export const getStaticProps: GetStaticProps = async _context => {
  const apolloClient = initializeApollo();

  const rs: any = await apolloClient
    .query({
      query: GET_RENT_SELL_SECTION,
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
