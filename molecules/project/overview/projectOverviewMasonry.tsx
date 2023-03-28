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
        <Masonry gutter={`30px`} className={`max-[1023px]:[&>div]:!gap-[20px]`}>
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
                  className={'relative'}
                >
                  <ProjectCard
                    dataImage={
                      itemProject.attributes.image.data[0].attributes ??
                      undefined
                    }
                    name={itemProject.attributes.name}
                  />
                </Link>
              );
            }
          })}
        </Masonry>
      </ResponsiveMasonry>
      {/* {<div className={`fixed top-0 left-0 h-screen w-full`}></div>} */}
    </>
  );
};

export default ProjectOverviewMasonry;
