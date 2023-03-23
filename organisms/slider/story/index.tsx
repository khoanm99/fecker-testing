import Image from 'next/image';
import Heading from 'atoms/typo/heading';
import Text from 'atoms/typo/text';
import NavigationSvg from '@/atoms/svg/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';

// Data
import sampleStorySlider from 'data/sampleStorySlider.json';

const StorySlider = ({ data }: any) => {
  console.log(data);
  return (
    <div className="story-slider slider-container py-[200px]">
      <div className="slider-header flex justify-between">
        <Heading
          renderAs={'h2'}
          title={sampleStorySlider.title}
          size={'h2'}
          className={'pb-[10px]'}
        />
        <span className="flex w-[100px] justify-end">
          <NavigationSvg className="slider-prev-btn hidden md:h-[32px] md:w-[32px] lg:block lg:h-[65px] lg:w-[65px]" />
          <NavigationSvg className="slider-next-btn ml-[5px] rotate-[180deg] md:h-[32px] md:w-[32px] lg:h-[65px] lg:w-[65px]" />
        </span>
      </div>
      <div className="slider-body relative">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          threshold={20}
          loop={true}
          navigation={{
            nextEl: '.slider-next-btn',
            prevEl: '.slider-prev-btn'
          }}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet as-scrollbar`
          }}
          breakpoints={{
            768: {
              slidesPerView: 1
            }
          }}
        >
          {sampleStorySlider.story.map((slider, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[240px] w-full md:h-[450px]">
                <Image
                  src={slider.image}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
                <Text
                  renderAs={'p'}
                  content={slider.year}
                  className="absolute bottom-[5px] right-[10px] text-[40px] font-bold leading-[40px] text-primary"
                />
              </div>
              <div className="py-[20px]">
                <Heading
                  renderAs="h3"
                  title={slider.title}
                  className={
                    'pb-[8px] text-[16px] font-bold uppercase leading-[24px] text-black'
                  }
                />
                <Text renderAs={'p'} content={slider.desc} size={'bodyText'} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StorySlider;
