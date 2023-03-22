import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_TEAM_SECTION } from '@/graphql/query/teamSection';
const Team = () => {
  return (
    <DefaultLayout>
      <div>Team</div>
    </DefaultLayout>
  );
};

export default Team;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const rs: any = await apolloClient
    .query({
      query: GET_TEAM_SECTION
    })
    .catch(() => {});
  return {
    props: {
      payload: rs?.data || {}
    }
  };
};
