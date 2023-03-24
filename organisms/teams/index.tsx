import Heading from '@/atoms/typo/heading';
import { TeamEntity, TeamEntityResponseCollection } from '@/graphql/generated';
import TeamCard from '@/molecules/team/teamCard';
import { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
const TeamSection = ({
  dataTeams
}: {
  dataTeams: TeamEntityResponseCollection;
}) => {
  const [dataTeamSuffer, setDataTeamSuffer] = useState<TeamEntity[]>();
  useEffect(() => {
    if (dataTeams) {
      let cloneArray = dataTeams.data.map(x => x);
      cloneArray.sort(() => Math.random() - 0.5);
      setDataTeamSuffer(cloneArray);
    }
  }, [dataTeams]);
  let count = 0;
  return (
    <div
      className={`max-w-[1440px] px-5 lg:px-16 xl:px-20 2xl:mx-auto 3xl:mx-auto 3xl:max-w-[1660px]`}
      id={`team`}
    >
      <Heading
        size="h3"
        renderAs="h3"
        className="pb-[10px] lg:pb-10 xl:pb-[50px]"
        title={`TEAM`}
      />
      {dataTeamSuffer && (
        <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 1024: 2 }}>
          <Masonry gutter={`40px`}>
            {dataTeamSuffer.map((itemTeam, key) => {
              let layout = 'layout-landscape' as
                | 'layout-landscape'
                | 'layout-portrait';
              switch (count) {
                case 0:
                  layout = 'layout-landscape';
                  count = count + 1;
                  break;
                case 1:
                  layout = 'layout-portrait';
                  count = count + 1;
                  break;
                case 2:
                  layout = 'layout-portrait';
                  count = count + 1;
                  break;
                case 3:
                  layout = 'layout-landscape';
                  count = 0;
                  break;
              }
              return (
                <div
                  key={key}
                  className={`flex ${layout} ${count} ${
                    count == 3 ? 'justify-end' : ''
                  }`}
                >
                  <TeamCard dataTeam={itemTeam.attributes} layout={layout} />
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </div>
  );
};

export default TeamSection;
