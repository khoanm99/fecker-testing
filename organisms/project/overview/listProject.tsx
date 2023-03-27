import {
  CategoryEntity,
  ComponentAccordionAccordion,
  ProjectRelationResponseCollection
} from '@/graphql/generated';
import { memo } from 'react';
import ProjectOverviewMasonry from '@/molecules/project/overview/projectOverviewMasonry';

import ToggleWithText from '@/molecules/toggle';
import { Maybe } from 'graphql/jsutils/Maybe';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';
import AccordionSection from '@/molecules/commons/accordions';

interface Props {
  listCategory?: CategoryEntity[];
}

const ProjectOverView = ({ listCategory }: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  const [listProject, setListProject] =
    useState<ProjectRelationResponseCollection['data']>();
  const handleLayout = (state?: boolean) => {
    if (state) {
      swiperInstance && swiperInstance.slideNext();
    } else {
      swiperInstance && swiperInstance.slidePrev();
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
          state={handleLayout}
        />
        <div className={`relative mt-12 overflow-hidden lg:mt-[118px]`}>
          <Swiper
            onSwiper={swiper => {
              setSwiperInstance(swiper);
            }}
            speed={500}
            spaceBetween={30}
            allowTouchMove={false}
          >
            {listProject && (
              <SwiperSlide>
                <ProjectOverviewMasonry listProject={listProject} />
              </SwiperSlide>
            )}
            <SwiperSlide>
              {listProject &&
                Array.isArray(listProject) &&
                listProject.map((itemProject, key) => (
                  <AccordionSection
                    key={key}
                    title={itemProject.attributes?.name ?? ''}
                    layout={`Grid`}
                    image={
                      itemProject?.attributes?.image?.data[0]?.attributes ??
                      undefined
                    }
                    content={itemProject.attributes?.content ?? ''}
                    index={key}
                    url={
                      itemProject.attributes?.slug
                        ? `/projekte/${itemProject.attributes?.slug}`
                        : ''
                    }
                  />
                ))}
            </SwiperSlide>
          </Swiper>
        </div>
        {/* {<div className={`fixed top-0 left-0 h-screen w-full`}></div>} */}
      </div>
    </>
  );
};

export default memo(ProjectOverView);
