import { useRef } from 'react';
import HeroImage from '@/molecules/hero/heroImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { ComponentBasicHeroSlider } from '@/graphql/generated';
import NavigationSvg from '@/atoms/svg/navigation';
import HeroText from '@/molecules/hero/heroText';
import HoverArea from '@/molecules/hoverArea';

const HeroSection = ({
  heroSectionData,
  templateName = 'home'
}: {
  heroSectionData: ComponentBasicHeroSlider;
  templateName: 'home' | 'subPage';
}) => {
  const listImage = heroSectionData.image.data;
  const havePagination =
    listImage && Array.isArray(listImage) && listImage.length > 1;
  const nextBtn = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    nextBtn.current && nextBtn.current.click();
  };
  return (
    <div className={`mb-14 overflow-hidden lg:relative`}>
      <HoverArea
        icon={`${listImage.length > 1 ? 'arrow-right' : ''}`}
        layout="slider"
      >
        <div
          className={`absolute top-0 right-0 z-[10] h-full w-[30%] cursor-pointer ${
            listImage.length > 1 ? '' : 'hidden'
          }`}
          onClick={handleClick}
        ></div>
        <div className={`relative`}>
          <Swiper
            loop
            slidesPerView={1}
            modules={[Pagination, Navigation]}
            pagination={{
              el: '.fecker-pagination',
              clickable: false
            }}
            navigation={{
              nextEl: '.fecker-button-next',
              prevEl: '.fecker-button-prev'
            }}
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
            <HeroText
              heroSectionData={heroSectionData}
              templateName={templateName}
            />
          )}
          {havePagination && (
            <>
              <div className="fecker-button-prev absolute left-5 top-1/2 z-10 -translate-y-1/2 lg:hidden">
                <NavigationSvg />
              </div>
              <div
                ref={nextBtn}
                className="fecker-button-next absolute right-5 top-1/2 z-10 -translate-y-1/2 rotate-180 lg:hidden"
              >
                <NavigationSvg />
              </div>
              <div
                className={`fecker-pagination fecker-swiper-pagination-custom`}
              />
            </>
          )}
        </div>
      </HoverArea>
    </div>
  );
};

export default HeroSection;
