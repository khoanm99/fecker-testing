import SiteImage from '@/atoms/siteImage';
import { Team } from '@/graphql/generated';
import useWindowSize from '@/hooks/useWindowSize';
import { Maybe } from 'graphql/jsutils/Maybe';

const TeamSection = ({
  dataTeam,
  layout
}: {
  dataTeam?: Maybe<Team>;
  layout: 'layout-landscape' | 'layout-portrait';
}) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024 ? true : false;
  return (
    <>
      <SiteImage
        title={dataTeam?.name ?? ''}
        description={dataTeam?.position ?? ''}
        image={
          isMobile
            ? dataTeam?.imagePortrait.data?.attributes
            : dataTeam?.imageLandscape.data?.attributes
        }
        variant={`green`}
        layout={layout}
      />
    </>
  );
};

export default TeamSection;
