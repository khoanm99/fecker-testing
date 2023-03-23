import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_TEAM_SECTION } from '@/graphql/query/teamSection';
import { TeamSection, Team } from '@/graphql/generated';
import TeamTemplate from '@/templates/TeamTemplate';

interface Props {
  teamSection: {
    data: {
      attributes: TeamSection;
    };
  };
  teams: Team;
}
const Team = ({ payload }: { payload: Props }) => {
  return (
    <DefaultLayout>
      <TeamTemplate dataResponse={payload.teamSection}></TeamTemplate>
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
