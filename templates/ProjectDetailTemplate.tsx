import Container from '@/components/container';
import { ProjectEntityResponse } from '@/graphql/generated';
import IntroContent from '@/molecules/hero/heroIntroContent';
import DetailMasonry from '@/molecules/project/detail/detailMasonry';
import HeroSection from '@/organisms/slider/hero';

interface Props {
  projectBySlug: ProjectEntityResponse | null;
}
const ProjectDetailTemplate = ({ projectBySlug }: Props) => {
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
    </>
  );
};

export default ProjectDetailTemplate;
