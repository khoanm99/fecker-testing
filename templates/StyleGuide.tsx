import Heading from '@/atoms/Typo/heading';
import Text from '@/atoms/Typo/text';

const StyleGuideTemplate = () => {
  return (
    <>
      <div className={`space-y-10 p-8`}>
        <Heading size={`h1`} renderAs={`h1`} title={`Headline 1`} />
        <Heading size={`h2`} renderAs={`h2`} title={`Heading 2 / Names`} />
        <div>
          <Heading
            size={`h2`}
            renderAs={`h2`}
            title={`Heading 2 Row 1`}
            cls={`italic`}
          />
          <Heading size={`h2`} renderAs={`h2`} title={`Heading 2 Row 2`} />
        </div>
        <Text size={`listFormularMenu`} title={`List / Formular / Menu`} />
        <Text size={`descBig`} title={`Description Big`} />
        <Text size={`text`} title={`Copy Text`} />
        <Text size={`number`} title={`Numbers`} />
        <Text size={`btn`} title={`Button`} />
        <Text size={`textSmall`} title={`Copy Text Small`} />
        <Text size={`descSmall`} title={`Description Small`} />

        <div>
          <div>Primary Colors</div>
          <div className="flex flex-wrap">
            <div className="h-[120px] w-[360px] rounded-lg bg-secondary "></div>
            <div className="w-full">
              <strong>Primary</strong>/ #FF003D
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="h-[120px] w-[360px] rounded-lg bg-primary"></div>
            <div className="w-full">
              <strong>Secondary</strong>/ #1D1D1D
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StyleGuideTemplate;
