import { ComponentAccordionAccordion } from '@/graphql/generated';
import Accordion from '@/molecules/commons/accordions';
import ProjectOverviewMasonry from '@/molecules/project/overview/projectOverviewMasonry';

import ToggleWithText from '@/molecules/toggle';
import { Maybe } from 'graphql/jsutils/Maybe';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';

const sampleList = [
  {
    attributes: {
      name: 'Scheune und Wohnhaus AR',
      imagePortrait: {
        data: {
          attributes: {
            url: `/assets/img/img-1.jpg`,
            width: 565,
            height: 890,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-1.jpg`,
            width: 565,
            height: 890,
            alternativeText: 'data'
          }
        }
      }
    }
  },
  {
    attributes: {
      name: 'Scheune und Wohnhaus AR',
      imagePortrait: {
        data: {
          attributes: {
            url: `/assets/img/img-2.png`,
            width: 353,
            height: 234,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-2.png`,
            width: 353,
            height: 234,
            alternativeText: 'data'
          }
        }
      }
    }
  },
  {
    attributes: {
      name: 'Scheune und Wohnhaus AR',
      imagePortrait: {
        data: {
          attributes: {
            url: `/assets/img/img-3.jpg`,
            width: 353,
            height: 255,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-3.jpg`,
            width: 353,
            height: 255,
            alternativeText: 'data'
          }
        }
      }
    }
  },
  {
    attributes: {
      name: 'Scheune und Wohnhaus AR',
      imagePortrait: {
        data: {
          attributes: {
            url: `/assets/img/img-4.jpg`,
            width: 255,
            height: 100,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-4.jpg`,
            width: 353,
            height: 100,
            alternativeText: 'data'
          }
        }
      }
    }
  },
  {
    attributes: {
      name: 'Scheune und Wohnhaus AR',
      imagePortrait: {
        data: {
          attributes: {
            url: `/assets/img/img-5.jpg`,
            width: 353,
            height: 100,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-5.jpg`,
            width: 353,
            height: 100,
            alternativeText: 'data'
          }
        }
      }
    }
  },
  {
    attributes: {
      name: 'Scheune und Wohnhaus AR',
      imagePortrait: {
        data: {
          attributes: {
            url: `/assets/img/img-5.jpg`,
            width: 353,
            height: 100,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-5.jpg`,
            width: 353,
            height: 100,
            alternativeText: 'data'
          }
        }
      }
    }
  },
  {
    attributes: {
      name: 'Scheune und Wohnhaus AR',
      imagePortrait: {
        data: {
          attributes: {
            url: `/assets/img/img-5.jpg`,
            width: 353,
            height: 100,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-5.jpg`,
            width: 353,
            height: 100,
            alternativeText: 'data'
          }
        }
      }
    }
  }
];

const listAccordion: Maybe<ComponentAccordionAccordion>[] = [
  // @ts-ignore
  { id: `2`, title: 'adasd', layout: 'Markdown' }
];

interface Props {
  listProject?: any;
}

const ProjectOverView = ({ listProject }: Props) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore>();
  const handleLayout = (state?: boolean) => {
    if (state) {
      swiperInstance && swiperInstance.slideNext();
    } else {
      swiperInstance && swiperInstance.slidePrev();
    }
  };
  return (
    <>
      <div className={`pt-[200px]`}>
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
            autoHeight={true}
          >
            <SwiperSlide>
              <ProjectOverviewMasonry listProject={sampleList} />
            </SwiperSlide>
            <SwiperSlide>
              <Accordion list={listAccordion as any} />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* {<div className={`fixed top-0 left-0 h-screen w-full`}></div>} */}
      </div>
    </>
  );
};

export default ProjectOverView;
