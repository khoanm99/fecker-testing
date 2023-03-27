import ProjectOverView from '@/organisms/project/listProject';

interface Props {
  dataResponse: {
    project: any;
  };
}

const OverViewProjectTemplate = () => {
  return (
    <>
      <ProjectOverView />
    </>
  );
};

export default OverViewProjectTemplate;
