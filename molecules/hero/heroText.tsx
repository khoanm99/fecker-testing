import PrimaryButton from '@/atoms/button';
import Heading from '@/atoms/typo/heading';
import { ComponentBasicHeroSlider } from '@/graphql/generated';
import Link from 'next/link';

const HeroText = ({
  heroSectionData,
  templateName = 'home'
}: {
  heroSectionData: ComponentBasicHeroSlider;
  templateName: 'home' | 'subPage';
}) => {
  const clsPositionTextHome = `lg:pl-[80px] xl:pl-[100px]`;
  const clsPositionTextSubPage = `lg:pl-[40px]`;
  return (
    <div
      className={`absolute bottom-6 z-[10] w-fit lg:bottom-[200px] lg:left-0 xl:bottom-[225px] ${
        templateName == 'home' ? clsPositionTextHome : clsPositionTextSubPage
      }`}
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
          className={`w-[calc(100vw_-_20px)] pb-5 text-center lg:w-fit lg:pb-0 lg:text-left`}
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
  );
};

export default HeroText;
