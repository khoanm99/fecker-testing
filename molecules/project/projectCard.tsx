import ImageWithHover from '@/atoms/imageWithHover';
import { UploadFile } from '@/graphql/generated';
import HoverArea from '../hoverArea';

const ProjectCard = ({
  dataImage,
  name
}: {
  dataImage?: UploadFile;
  name?: string;
}) => {
  return (
    <>
      {dataImage && (
        <div className={`group relative`}>
          <HoverArea icon={'plus'} layout={'imageLink'}>
            <ImageWithHover
              title={name ?? ''}
              description={''}
              image={dataImage}
              variant={`black`}
              sharp={`auto`}
            />
          </HoverArea>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
