import Container from '@/components/container';
import {
  ComponentBasicHeroSlider,
  ComponentBasicIntroContent
} from '@/graphql/generated';
import IntroContent from '@/molecules/hero/heroIntroContent';
import HeroSection from '@/organisms/slider/hero';
import ProjectOverView from '@/organisms/project/overview/listProject';

interface Props {
  heroSlider?: ComponentBasicHeroSlider;
  introContent?: ComponentBasicIntroContent;
  content?: any[];
}

const OverViewProjectTemplate = ({
  heroSlider,
  introContent,
  content
}: Props) => {
  return (
    <>
      {heroSlider && (
        <HeroSection heroSectionData={heroSlider} templateName={`subPage`} />
      )}

      {introContent && (
        <IntroContent introContent={introContent} templateName={`subPage`} />
      )}

      {content &&
        Array.isArray(content) &&
        content.map((itemContent, keyContent) => {
          if (
            itemContent?.__typename == 'ComponentContentListProject' &&
            itemContent.category.data.length > 0
          ) {
            const listCategory = itemContent.category.data;
            return (
              <Container layout={`grid`} key={keyContent}>
                <ProjectOverView listCategory={listCategory} />
              </Container>
            );
          } else {
            return <></>;
          }
        })}
    </>
  );
};

export default OverViewProjectTemplate;
