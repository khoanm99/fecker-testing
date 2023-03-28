import ImageWithHover from '@/atoms/imageWithHover';
import { UploadFile } from '@/graphql/generated';
import { IMouseContext } from '@/types';
import { MouseEvent, useContext } from 'react';
import MouseContext from '@/contexts/mouseContext';

const ProjectCard = ({
  dataImage,
  name
}: {
  dataImage?: UploadFile;
  name?: string;
}) => {
  const ctx: IMouseContext = useContext(MouseContext) as IMouseContext;

  const mouseMoveHandle = (e: MouseEvent) => {
    ctx.updateState({
      cursorVariant: 'projectCard',
      cursorActive: true
    });
  };

  const mouseLeaveHandle = () => {
    ctx.updateState({
      cursorVariant: 'default',
      cursorActive: false
    });
  };
  return (
    <>
      {dataImage && (
        <div
          className={`group relative`}
          onMouseEnter={mouseMoveHandle}
          onMouseLeave={mouseLeaveHandle}
        >
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
