import DefaultLayout from '@/components/DefaultLayout';
import { GetStaticProps } from 'next';
import { initializeApollo } from '@/utils/apolloClient';
import { GET_TEAM_SECTION } from '@/graphql/query/teamSection';
import StorySlider from '@/organisms/slider/story';
import { TeamSection, Team } from '@/graphql/generated';
import { Fragment } from 'react';

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
      <div className="min-h-[100vh] px-[20px]">
        {payload.teamSection.data.attributes.contents &&
          payload.teamSection.data.attributes.contents.map(
            (item: any, key: number) => {
              switch (item.__typename) {
                case 'ComponentContentStory':
                  return (
                    <Fragment key={key}>
                      <StorySlider data={item} title={item.title} />
                    </Fragment>
                  );
              }
            }
          )}
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
