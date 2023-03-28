import Container from '@/components/container';
import { ProjectSectionEntityResponse } from '@/graphql/generated';
import IntroContent from '@/molecules/hero/heroIntroContent';
import HeroSection from '@/organisms/slider/hero';
import ProjectOverView from '@/organisms/project/overview/listProject';

interface Props {
  dataResponse: {
    projectSection: ProjectSectionEntityResponse;
  };
}

const OverViewProjectTemplate = ({ dataResponse }: Props) => {
  const projectSection = dataResponse?.projectSection;
  const introContent = projectSection?.data?.attributes?.introContent;
  const content = projectSection.data?.attributes?.contents;
  return (
    <>
      {projectSection?.data?.attributes?.heroSlider && (
        <HeroSection
          heroSectionData={projectSection.data.attributes?.heroSlider}
          templateName={`subPage`}
        />
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
