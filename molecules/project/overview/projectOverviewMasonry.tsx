import { ProjectEntity } from '@/graphql/generated';
import Link from 'next/link';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ProjectCard from '../projectCard';

const ProjectOverviewMasonry = ({
  listProject
}: {
  listProject: ProjectEntity[];
}) => {
  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 1023: 3 }}>
        <Masonry
          gutter={`40px`}
          className={`lg:gap-[40px] max-[1023px]:[&>div]:!gap-[20px]`}
        >
          {listProject.map((itemProject, key: number) => {
            if (
              itemProject.attributes?.image?.data &&
              itemProject.attributes.image.data[0]
            ) {
              return (
                <Link
                  key={key}
                  href={`${
                    itemProject.attributes?.slug
                      ? `/projekte/${itemProject.attributes?.slug}`
                      : '#'
                  }`}
                >
                  <ProjectCard dataProject={itemProject.attributes} />
                </Link>
              );
            }
          })}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default ProjectOverviewMasonry;
