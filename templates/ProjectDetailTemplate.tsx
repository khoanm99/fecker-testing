import DetailMasonry from '@/molecules/project/details/detailMasonry';

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

const ProjectDetailTemplate = () => {
  return (
    <div>
      <DetailMasonry listImage={sampleList} />
    </div>
  );
};

export default ProjectDetailTemplate;
