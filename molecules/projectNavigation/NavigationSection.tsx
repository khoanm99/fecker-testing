import NavigationSvg from '@/atoms/svg/navigation';
import Text from '@/atoms/typo/text';
import { ProjectEntity } from '@/graphql/generated';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const NavigatorSection = ({
  listProject,
  currentProject
}: {
  listProject: ProjectEntity[];
  currentProject: string;
}) => {
  const [listNavigateIndex, setListNavigateIndex] = useState<number[]>();
  useEffect(() => {
    if (currentProject && listProject) {
      const currentIndex = listProject.findIndex(
        item => item.attributes?.name == currentProject
      );

      switch (currentIndex) {
        case 0:
          setListNavigateIndex([1, listProject.length - 1]);
          break;
        case listProject.length - 1:
          setListNavigateIndex([0, listProject.length - 2]);
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
          {listNavigateIndex.map((projectIndex, key) =>
            renderTextWithNavigate({
              url: `/projekte/${listProject[projectIndex]?.attributes?.slug}`,
              title: listProject[projectIndex]?.attributes?.name,
              navigate: key == 0 ? 'next' : 'prev',
              className: key == 0 ? 'mb-3 md:mb-0' : ''
            })
          )}
        </div>
      )}
    </>
  );
};

export default NavigatorSection;

interface Props {
  type?: 'link';
  cls?: string;
  className?: string;
  title?: string;
  url: string;
  navigate?: 'next' | 'prev';
}

const renderTextWithNavigate = ({
  type = 'link',
  className = '',
  title = '',
  url,
  navigate = 'next'
}: Props) => {
  switch (type) {
    case 'link':
      return (
        <>
          <Link
            href={url ?? '#'}
            title={title}
            className={twMerge(
              clsx(
                `flex items-center justify-start gap-5 transition-transform duration-300 lg:justify-center`,
                {
                  'flex-row-reverse': navigate == 'prev'
                },
                className
              )
            )}
          >
            {title && renderContentWithNavigator({ title, navigate })}
          </Link>
        </>
      );
  }
};

const renderContentWithNavigator = ({
  title,
  navigate = 'next'
}: {
  title: string;
  navigate: 'next' | 'prev';
}) => {
  return (
    <>
      <Text
        content={title}
        className={`w-full font-bold lg:font-[16px]`}
        renderAs={`div`}
      />
      <NavigationSvg
        className={`flex !h-12 !w-12 flex-[0_0_48px] ${
          navigate == 'next' ? `rotate-180` : ``
        }`}
      />
    </>
  );
};
