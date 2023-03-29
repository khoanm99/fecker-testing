import { ProjectRelationResponseCollection } from '@/graphql/generated';
import { useEffect, useState } from 'react';
import TextWithNavigate from './TextWithNavigate';

const NavigatorSection = ({
  listProject,
  currentProject
}: {
  listProject: ProjectRelationResponseCollection | null;
  currentProject: string;
}) => {
  const [listNavigateIndex, setListNavigateIndex] = useState<number[]>();
  useEffect(() => {
    if (currentProject && listProject) {
      const currentIndex = listProject.data.findIndex(
        item => item.attributes?.name == currentProject
      );

      switch (currentIndex) {
        case 0:
          setListNavigateIndex([1, listProject.data.length - 1]);
          break;
        case listProject.data.length - 1:
          setListNavigateIndex([0, listProject.data.length - 2]);
          break;
        default:
          setListNavigateIndex([currentIndex + 1, currentIndex - 1]);
          break;
      }
    }
  }, [currentProject, listProject]);
  return (
    <>
      {listProject && listNavigateIndex && (
        <div className={`justify-between md:flex md:flex-row-reverse`}>
          {listNavigateIndex.map((projectIndex, key) => {
            return (
              <TextWithNavigate
                url={`/projekte/${listProject.data[projectIndex].attributes?.slug}`}
                key={key}
                title={listProject.data[projectIndex].attributes?.name}
                navigate={key == 0 ? 'next' : 'prev'}
                className={key == 0 ? 'mb-3 md:mb-0' : ''}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavigatorSection;
