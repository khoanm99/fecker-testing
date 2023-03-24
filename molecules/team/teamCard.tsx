import ImageWithHover from '@/atoms/imageWithHover';
import { Team } from '@/graphql/generated';
import useWindowSize from '@/hooks/useWindowSize';
import { Maybe } from 'graphql/jsutils/Maybe';

const TeamCard = ({
  dataTeam,
  layout
}: {
  dataTeam?: Maybe<Team>;
  layout: 'layout-landscape' | 'layout-portrait';
}) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024 ? true : false;
  const imageAtDesktop =
    layout == 'layout-portrait'
      ? dataTeam?.imagePortrait.data?.attributes
      : dataTeam?.imageLandscape.data?.attributes;
  return (
    <>
      <ImageWithHover
        title={dataTeam?.name ?? ''}
        description={dataTeam?.position ?? ''}
        image={
          isMobile ? dataTeam?.imagePortrait.data?.attributes : imageAtDesktop
        }
        variant={`green`}
        layout={layout}
      />
    </>
  );
};

export default TeamCard;
