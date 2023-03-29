import Container from '@/components/container';
import { ProjectEntity, ProjectEntityResponse } from '@/graphql/generated';
import IntroContent from '@/molecules/hero/heroIntroContent';
import DetailMasonry from '@/molecules/project/detail/detailMasonry';
import HeroSection from '@/organisms/slider/hero';
import NavigatorSection from '@/molecules/projectNavigation/NavigationSection';

interface Props {
  projectBySlug: ProjectEntityResponse | null;
  listProject?: ProjectEntity[];
}
const ProjectDetailTemplate = ({ projectBySlug, listProject }: Props) => {
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
            listProject={listProject ?? []}
            currentProject={projectData?.name}
          />
        </Container>
      )}
    </>
  );
};

export default ProjectDetailTemplate;
