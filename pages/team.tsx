import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_TEAM_SECTION } from '@/graphql/query/teamSection';
import StorySlider from '@/organisms/slider/story';
const Team = ({ payload }: any) => {
  console.log(payload);
  return (
    <DefaultLayout>
      <div className="min-h-[100vh] px-[20px]">
        <StorySlider />
      </div>
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
