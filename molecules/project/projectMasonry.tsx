import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ProjectCard from './projectCard';

const ProjectMasonry = ({ listProject }: { listProject: any[] }) => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 1023: 3 }}>
        <Masonry
          gutter={`40px`}
          className={`lg:gap-[40px] max-[1023px]:[&>div]:!gap-[20px]`}
        >
          {listProject.map((itemTeam: any, key: number) => {
            return (
              <ProjectCard
                dataTeam={itemTeam.attributes}
                key={key}
                layout={`layout-landscape`}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default ProjectMasonry;
