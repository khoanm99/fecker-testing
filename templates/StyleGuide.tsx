import Typo from '@/atoms/Typo';
import { IAccordionList } from '@/Model/organisms';
import Accordion from '@/molecules/Accordion';

const StyleGuideTemplate = () => {
  const list: IAccordionList = [
    { title: 'Scheune und Wohnhaus AR', item: 'asdas' },
    { title: 'Holzbau Plus Award 2022', item: 'asdas' },
    { title: 'Innovation Einstellhalle arCHill', item: 'asdas' },
    { title: 'Nachhaltigkeit mit Splittdecke', item: 'asdas' }
  ];

  return (
    <>
      <div className={`space-y-10 p-8`}>
        <Typo size={`h1`} renderAs={`h1`} title={`Headline 1`} />
        <Typo size={`h2`} renderAs={`h2`} title={`Heading 2 / Names`} />
        <div>
          <Typo
            size={`h2`}
            renderAs={`h2`}
            title={`Heading 2 Row 1`}
            cls={`italic`}
          />
          <Typo size={`h2`} renderAs={`h2`} title={`Heading 2 Row 2`} />
        </div>
        <Typo size={`listFormularMenu`} title={`List / Formular / Menu`} />
        <Typo size={`descBig`} title={`Description Big`} />
        <Typo size={`text`} title={`Copy Text`} />
        <Typo size={`number`} title={`Numbers`} />
        <Typo size={`btn`} title={`Button`} />
        <Typo size={`textSmall`} title={`Copy Text Small`} />
        <Typo size={`descSmall`} title={`Description Small`} />

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

        <Accordion list={list} />
      </div>
    </>
  );
};

export default StyleGuideTemplate;
