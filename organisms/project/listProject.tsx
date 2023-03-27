import { ComponentAccordionAccordion } from '@/graphql/generated';
import Accordion from '@/molecules/commons/accordions';
import ProjectMasonry from '@/molecules/project/projectMasonry';

import ToggleWithText from '@/molecules/toggle';
import { Maybe } from 'graphql/jsutils/Maybe';
import { useState } from 'react';

const sampleList = [
  {
    attributes: {
      name: 'Scheune und Wohnhaus AR',
      imagePortrait: {
        data: {
          attributes: {
            url: `/assets/img/img-1.jpg`,
            width: 353,
            height: 515,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-1.jpg`,
            width: 353,
            height: 515,
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
            height: 515,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-3.jpg`,
            width: 353,
            height: 515,
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
            width: 353,
            height: 234,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-4.jpg`,
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
            url: `/assets/img/img-5.jpg`,
            width: 353,
            height: 515,
            alternativeText: 'data'
          }
        }
      },
      imageLandscape: {
        data: {
          attributes: {
            url: `/assets/img/img-5.jpg`,
            width: 353,
            height: 515,
            alternativeText: 'data'
          }
        }
      }
    }
  }
];

// const listAccordion: Maybe<ComponentAccordionAccordion>[] = [
//   { id: `2`, title: 'adasd' }
// ];

const ProjectOverView = () => {
  const [layout, setLayout] = useState<'accordion' | 'masonry'>('masonry');
  const handleLayout = (state?: boolean) => {
    if (state) {
      setLayout('accordion');
    } else {
      setLayout('masonry');
    }
  };
  return (
    <>
      <div className={`pt-[200px]`}>
        <ToggleWithText
          content={{ left: 'Kachelansicht', right: `Listenansicht` }}
          state={handleLayout}
        />
        {/* {layout == 'masonry' && <ProjectMasonry listProject={sampleList} />} */}
        {/* {layout == 'accordion' && <Accordion list={listAccordion} />} */}
      </div>
    </>
  );
};

export default ProjectOverView;
