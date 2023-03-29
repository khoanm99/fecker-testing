import {
  CategoryEntity,
  ProjectRelationResponseCollection
} from '@/graphql/generated';
import { memo } from 'react';
import ProjectOverviewMasonry from '@/molecules/project/overview/projectOverviewMasonry';

import ToggleWithText from '@/molecules/toggle';
import { useEffect, useState } from 'react';
import AccordionSection from '@/molecules/commons/accordions';

interface Props {
  listCategory?: CategoryEntity[];
}

const ProjectOverView = ({ listCategory }: Props) => {
  const [listProject, setListProject] =
    useState<ProjectRelationResponseCollection['data']>();
  const [isListImage, setIsListImage] = useState<boolean>(true);
  const handleLayout = (state?: boolean) => {
    if (state) {
      setIsListImage(false);
    } else {
      setIsListImage(true);
    }
  };

  useEffect(() => {
    if (listCategory && Array.isArray(listCategory)) {
      let transformList: ProjectRelationResponseCollection['data'] = [];
      listCategory.map(itemCategory => {
        if (itemCategory.attributes?.project) {
          transformList = transformList.concat(
            itemCategory.attributes?.project.data
          );
        }
        setListProject(transformList);
      });
    }
  }, []);

  return (
    <>
      <div className={``}>
        <ToggleWithText
          content={{ left: 'Kachelansicht', right: `Listenansicht` }}
          handleLayout={handleLayout}
        />
        <div className={`relative mt-12 overflow-hidden lg:mt-[118px]`}>
          {listProject && isListImage && (
            <ProjectOverviewMasonry listProject={listProject} />
          )}
          {listProject &&
            !isListImage &&
            Array.isArray(listProject) &&
            listProject.map((itemProject, key) => (
              <AccordionSection
                key={key}
                title={itemProject.attributes?.name ?? ''}
                layout={`Grid`}
                image={
                  itemProject?.attributes?.heroSlider?.image?.data[0]
                    ?.attributes ?? null
                }
                content={itemProject?.attributes?.introContent?.content ?? ''}
                index={key}
                url={
                  itemProject.attributes?.slug
                    ? `/projekte/${itemProject.attributes?.slug}`
                    : ''
                }
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default memo(ProjectOverView);
