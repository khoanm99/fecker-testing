import HeroImage from '@/molecules/hero/heroImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { ComponentBasicHeroSlider } from '@/graphql/generated';
import Heading from '@/atoms/Typo/heading';
import PrimaryButton from '@/atoms/button';
import Link from 'next/link';
import NavigationSvg from '@/atoms/Svg/navigation';

const HeroSection = ({
  heroSectionData
}: {
  heroSectionData: ComponentBasicHeroSlider;
}) => {
  const listImage = heroSectionData.image.data;
  return (
    <div className={`mb-14`}>
      <div className={`relative`}>
        <Swiper
          loop
          slidesPerView={1}
          modules={[Pagination, Navigation]}
          // pagination={{
          //   el: `.fecker-pagination`,
          //   clickable: true,
          //   type: 'bullets'
          // }}
          navigation={{
            nextEl: '.fecker-button-next',
            prevEl: '.fecker-button-prev'
          }}
          observer={true}
          observeParents={true}
          observeSlideChildren={true}
        >
          <>
            {listImage &&
              Array.isArray(listImage) &&
              listImage.map((itemImage, key) => (
                <SwiperSlide key={key}>
                  <HeroImage image={itemImage.attributes} />
                </SwiperSlide>
              ))}
          </>
        </Swiper>
        {heroSectionData && (
          <div
            className={`absolute bottom-0 z-[10] w-fit lg:bottom-[180px] lg:pl-[80px] 2xl:bottom-[225px] 2xl:pl-[100px]`}
          >
            {heroSectionData.title && (
              <Heading
                size={`h1`}
                renderAs={`h1`}
                title={heroSectionData.title}
                className={`z-10 max-w-[195px] pb-6 pl-5 text-white lg:max-w-[630px] lg:pl-0`}
              />
            )}
            {heroSectionData.buttonLink && (
              <div
                className={`w-screen pb-11 text-center lg:w-fit lg:pb-0 lg:text-left`}
              >
                <Link
                  href={heroSectionData.buttonLink.url}
                  title={heroSectionData.buttonLink.title}
                >
                  <PrimaryButton title={heroSectionData.buttonLink.title} />
                </Link>
              </div>
            )}
          </div>
        )}
        <div className="fecker-button-prev absolute left-5 top-1/2 z-10 -translate-y-1/2 lg:hidden">
          <NavigationSvg />
        </div>
        <div className="fecker-button-next absolute right-5 top-1/2 z-10 -translate-y-1/2 rotate-180 lg:hidden">
          <NavigationSvg />
        </div>
      </div>
      {/* <div className={`fecker-pagination fecker-swiper-pagination-custom`} /> */}
    </div>
  );
};

export default HeroSection;
