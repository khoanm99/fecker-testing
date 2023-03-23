import Image from 'next/image';
import Heading from 'atoms/typo/heading';
import Text from 'atoms/typo/text';
import NavigationSvg from '@/atoms/svg/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ComponentPartnerPartner } from '@/graphql/generated';

const PartnerSlider = ({
  data,
  title
}: {
  data: {
    partners: ComponentPartnerPartner[];
  };
  title: string;
}) => {
  return (
    <div className="partner-slider slider-container pb-[60px] pl-[20px] lg:pb-[120px] lg:pl-[40px] xl:pl-[75px]">
      <div className="slider-header flex justify-between pr-[20px] lg:pr-[40px] xl:pr-[75px]">
        <Heading
          renderAs={'h2'}
          title={title}
          size={'h2'}
          className={'pb-[10px] lg:pb-[50px] lg:leading-[67px]'}
        />
        <span className="flex w-[100px] justify-end">
          <NavigationSvg className="partner-slider-next-btn ml-[5px] rotate-[180deg] md:h-[32px] md:w-[32px] lg:h-[65px] lg:w-[65px]" />
        </span>
      </div>
      <div className="slider-body relative">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={15}
          slidesPerView={2.7}
          threshold={20}
          navigation={{
            nextEl: '.partner-slider-next-btn',
            prevEl: '.partner-slider-prev-btn'
          }}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet as-scrollbar`
          }}
          breakpoints={{
            1024: {
              slidesPerView: 5.3
            }
          }}
        >
          {data.partners.map((slide, index: number) => (
            <SwiperSlide key={index}>
              <a
                className="relative block after:block after:pb-[100%] after:content-['']"
                href={slide.link ? slide.link : '#'}
                target="_blank"
                rel="noreferrer"
              >
                {slide?.image?.data?.attributes?.url && (
                  <Image
                    src={slide.image.data.attributes.url}
                    alt={`${slide.image.data.attributes.name}`}
                    fill
                    className="object-cover object-center"
                    placeholder="blur"
                    blurDataURL={'/assets/img/blur-image.png'}
                  />
                )}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PartnerSlider;
