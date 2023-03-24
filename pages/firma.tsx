import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import {
  TeamEntityResponseCollection,
  TeamSectionEntityResponse
} from '@/graphql/generated';
import { GET_TEAM_SECTION } from '@/graphql/query/teamSection';
import FirmaTemplate from '@/templates/FirmaTemplate';
interface Props {
  dataResponse: {
    teamSection: TeamSectionEntityResponse;
    teams: TeamEntityResponseCollection;
  };
}
const Firma = ({ dataResponse }: Props) => {
  return (
    <DefaultLayout>
      <FirmaTemplate
        dataTeamSection={dataResponse.teamSection ?? undefined}
        dataTeams={dataResponse.teams}
      />
    </DefaultLayout>
  );
};

export default Firma;

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  const rs: any = await apolloClient
    .query({
      query: GET_TEAM_SECTION
    })
    .catch(() => {});
  return {
    props: {
      dataResponse: rs?.data ?? {}
    }
  };
};
