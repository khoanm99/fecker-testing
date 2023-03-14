import Heading from 'atoms/Heading/index';
import Text from 'atoms/Text/index';

const HomeTemplate = () => {
  return (
    <div className={'py-[60px] px-[20px]'}>
      <Heading
        renderAs={'h1'}
        title={'Heading H1'}
        cls={'heading-h1 pb-[20px]'}
      />
      <Text
        renderAs={'p'}
        content={'Content: Cras et massa congue, cursus est et, lacinia nisi.'}
      />
    </div>
  );
};

export default HomeTemplate;
