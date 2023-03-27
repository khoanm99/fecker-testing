import ImageWithHover from '@/atoms/imageWithHover';
import { Project } from '@/graphql/generated';
import { Maybe } from 'graphql/jsutils/Maybe';

const ProjectCard = ({
  dataProject,
  layout
}: {
  dataProject?: Maybe<Project>;
  layout?: 'layout-landscape' | 'layout-portrait';
}) => {
  return (
    <>
      {dataProject?.image?.data[0] && (
        <div className={`group relative`}>
          <ImageWithHover
            title={dataProject?.name ?? ''}
            description={''}
            image={dataProject?.image.data[0].attributes}
            variant={`black`}
            sharp={`auto`}
          />
        </div>
      )}
    </>
  );
};

export default ProjectCard;
