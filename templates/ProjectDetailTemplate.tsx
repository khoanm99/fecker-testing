import Container from '@/components/container';
import {
  CategoryEntityResponseCollection,
  ProjectEntityResponse
} from '@/graphql/generated';
import IntroContent from '@/molecules/hero/heroIntroContent';
import DetailMasonry from '@/molecules/project/detail/detailMasonry';
import HeroSection from '@/organisms/slider/hero';
import NavigatorSection from '@/molecules/projectNavigation/NavigationSection';

interface Props {
  projectBySlug: ProjectEntityResponse | null;
  listProjectByCategory?: CategoryEntityResponseCollection;
}
const ProjectDetailTemplate = ({
  projectBySlug,
  listProjectByCategory
}: Props) => {
  const projectData = projectBySlug?.data?.attributes;
  const introContent = projectData?.introContent;
  const listImage = projectData?.image?.data ?? [];
  return (
    <>
      {projectData && projectData.heroSlider && (
        <HeroSection
          heroSectionData={projectData.heroSlider}
          templateName={`subPage`}
        />
      )}

      {introContent && (
        <IntroContent introContent={introContent} templateName="subPage" />
      )}

      {listImage && listImage.length > 0 && (
        <Container layout={`grid`}>
          <DetailMasonry listImage={listImage} />
        </Container>
      )}

      {projectData && projectData?.name && (
        <Container layout={`grid`}>
          <NavigatorSection
            listProject={
              listProjectByCategory?.data[0].attributes?.project ?? null
            }
            currentProject={projectData?.name}
          />
        </Container>
      )}
    </>
  );
};

export default ProjectDetailTemplate;
