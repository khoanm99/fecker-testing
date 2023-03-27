import ImageWithHover from '@/atoms/imageWithHover';
import { Team } from '@/graphql/generated';
import useWindowSize from '@/hooks/useWindowSize';
import { Maybe } from 'graphql/jsutils/Maybe';

const ProjectCard = ({
  dataTeam,
  layout
}: {
  dataTeam?: Maybe<Team>;
  layout?: 'layout-landscape' | 'layout-portrait';
}) => {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024 ? true : false;
  const imageAtDesktop =
    layout == 'layout-portrait'
      ? dataTeam?.imagePortrait.data?.attributes
      : dataTeam?.imageLandscape.data?.attributes;

  return (
    <>
      <div className={`group relative`}>
        <ImageWithHover
          title={dataTeam?.name ?? ''}
          description={dataTeam?.position ?? ''}
          image={
            isMobile ? dataTeam?.imagePortrait.data?.attributes : imageAtDesktop
          }
          variant={`black`}
          sharp={`auto`}
        />
      </div>
    </>
  );
};

export default ProjectCard;
