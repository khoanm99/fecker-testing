import HeroImage from '@/molecules/hero/heroImage';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import {
  ComponentBasicHeroSlider,
  ComponentBasicIntroContent
} from '@/graphql/generated';
import NavigationSvg from '@/atoms/svg/navigation';
import ContactStickySvg from '@/atoms/svg/contactSticky';
import { twMerge } from 'tailwind-merge';
import HeroIntroText from '@/molecules/hero/heroIntroContent';
import HeroText from '@/molecules/hero/heroText';

const HeroSection = ({
  heroSectionData,
  introContent,
  templateName = 'home'
}: {
  heroSectionData: ComponentBasicHeroSlider;
  introContent?: ComponentBasicIntroContent;
  templateName: 'home' | 'subPage';
}) => {
  const listImage = heroSectionData.image.data;
  const havePagination =
    listImage && Array.isArray(listImage) && listImage.length > 1;

  const defaultContactCls = `hidden lg:absolute  lg:z-[11] lg:right-[30px] lg:block `;
  const contactClsHome = `lg:bottom-[50px] xl:bottom-[70px]`;
  const contactClsSubPage = `lg:bottom-[30px] xl:bottom-[35px]`;
  return (
    <div className={`mb-14 lg:relative`}>
      <div className={`relative`}>
        <Swiper
          // loop
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{
            el: '.fecker-pagination',
            clickable: true
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
        {heroSectionData && <HeroText heroSectionData={heroSectionData} />}
        {havePagination && (
          <>
            <div className="fecker-button-prev absolute left-5 top-1/2 z-10 -translate-y-1/2 lg:hidden">
              <NavigationSvg />
            </div>
            <div className="fecker-button-next absolute right-5 top-1/2 z-10 -translate-y-1/2 rotate-180 lg:hidden">
              <NavigationSvg />
            </div>
            <div
              className={`fecker-pagination fecker-swiper-pagination-custom`}
            />
          </>
        )}
        <ContactStickySvg
          className={twMerge(
            defaultContactCls,
            templateName == 'home' ? contactClsHome : contactClsSubPage
          )}
        />
      </div>
      {introContent && (
        <HeroIntroText
          introContent={introContent}
          templateName={templateName}
        />
      )}
    </div>
  );
};

export default HeroSection;
