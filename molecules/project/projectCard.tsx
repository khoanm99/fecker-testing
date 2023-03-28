import ImageWithHover from '@/atoms/imageWithHover';
import { UploadFile } from '@/graphql/generated';

const ProjectCard = ({
  dataImage,
  name
}: {
  dataImage?: UploadFile | null;
  name?: string;
}) => {
  return (
    <>
      {dataImage && (
        <div className={`group relative`}>
          <ImageWithHover
            title={name ?? ''}
            description={''}
            image={dataImage}
            variant={`black`}
            sharp={`auto`}
          />
        </div>
      )}
    </>
  );
};

export default ProjectCard;
