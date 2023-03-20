import Heading from '@/atoms/Typo/heading';
import Text from '@/atoms/Typo/text';

const HomeTemplate = () => {
  return (
    <div className={'py-[60px] px-[20px]'}>
      <Heading
        renderAs={'h1'}
        size={`h1`}
        title={'Heading H1'}
        className={'heading-h1 pb-[20px]'}
      />
      <Text
        renderAs={'p'}
        content={'Content: Cras et massa congue, cursus est et, lacinia nisi.'}
      />
    </div>
  );
};

export default HomeTemplate;
