import Image from 'next/image';
import Heading from 'atoms/typo/heading';
import Text from 'atoms/typo/text';
import NavigationSvg from '@/atoms/svg/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import { ComponentStoryStory } from '@/graphql/generated';

const StorySlider = ({
  data,
  title
}: {
  data: {
    stories: ComponentStoryStory[];
  };
  title: string;
}) => {
  return (
    <div className="story-slider slider-container">
      <div className="slider-header flex justify-between">
        <Heading
          renderAs={'h2'}
          title={title}
          size={'h2'}
          className={'pb-[10px] lg:pb-[50px] lg:leading-[67px]'}
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
          {data.stories.map((slide, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex-row lg:flex">
                <div className="relative h-[240px] w-full md:h-[450px] lg:min-h-[500px] lg:w-7/12 2xl:h-[560px] 3xl:h-[750px]">
                  {slide?.image?.data?.attributes?.url && (
                    <Image
                      src={slide.image.data.attributes.url}
                      alt={`${slide.image.data.attributes.name}`}
                      fill
                      sizes={'100%'}
                      className="object-cover object-center"
                      placeholder="blur"
                      blurDataURL={'/assets/img/blur-image.png'}
                    />
                  )}
                  <Text
                    renderAs={'p'}
                    content={slide.year ?? ''}
                    className="absolute bottom-[5px] right-[10px] text-[40px] font-bold leading-[40px] text-primary lg:hidden"
                  />
                </div>
                <div className="pt-[20px] lg:w-5/12 lg:pl-[70px]">
                  <Heading
                    renderAs={'h3'}
                    title={slide.year ?? ''}
                    className="hidden text-right font-bold text-primary lg:block lg:pb-[45px] lg:text-[120px] lg:leading-[120px]"
                  />
                  <Heading
                    renderAs="h4"
                    title={slide.title}
                    className={
                      'pb-[8px] text-[16px] font-bold uppercase leading-[24px] text-black lg:pb-[22px] lg:text-[20px] lg:leading-[30px]'
                    }
                  />
                  <Text
                    renderAs={'p'}
                    content={slide.description}
                    size={'bodyText'}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StorySlider;
