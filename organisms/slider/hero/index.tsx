import { MouseEvent, useContext, useRef } from 'react';
import HeroImage from '@/molecules/hero/heroImage';
import NavigationSvg from '@/atoms/svg/navigation';
import HeroText from '@/molecules/hero/heroText';
import MouseContext from '@/contexts/mouseContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { IMouseContext } from '@/types';
import { ComponentBasicHeroSlider } from '@/graphql/generated';
import 'swiper/css';
import 'swiper/css/navigation';

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

  const ctx: IMouseContext = useContext(MouseContext) as IMouseContext;
  const handleClick = () => {
    nextBtn.current && nextBtn.current.click();
  };

  const mouseMoveHandle = (e: MouseEvent) => {
    ctx.updateState({
      cursorVariant: 'slider',
      cursorActive: true
    });
  };

  const mouseLeaveHandle = () => {
    ctx.updateState({
      cursorVariant: 'default',
      cursorActive: false
    });
  };
  return (
    <div className={`relative mb-14 overflow-hidden`}>
      <div
        onMouseEnter={mouseMoveHandle}
        onMouseLeave={mouseLeaveHandle}
        className={`absolute top-0 right-0 z-[10] hidden h-full w-[30%] cursor-pointer lg:block ${
          listImage.length > 1 ? '' : 'lg:hidden'
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
    </div>
  );
};

export default HeroSection;
