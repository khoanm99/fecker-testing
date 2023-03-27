import Container from '@/components/container';
import HeroSection from '@/organisms/hero';
import ProjectOverView from '@/organisms/project/overview/listProject';
import ProjectDetailTemplate from './ProjectDetailTemplate';

interface Props {
  dataResponse: {
    projectSection: any;
  };
}

const OverViewProjectTemplate = ({ dataResponse }: Props) => {
  const ProjectSection = dataResponse?.projectSection;
  return (
    <>
      {ProjectSection?.data?.attributes?.heroSlider && (
        <HeroSection
          heroSectionData={ProjectSection.data.attributes?.heroSlider}
          templateName={`subPage`}
        />
      )}
      <Container layout={`grid`}>
        <ProjectOverView />
      </Container>
      <Container layout={`grid`}>
        <ProjectDetailTemplate />
      </Container>
    </>
  );
};

export default OverViewProjectTemplate;
