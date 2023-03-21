import PrimaryButton from '@/atoms/button';
import Input from '@/atoms/input';
import ContactSvg from '@/atoms/Svg/contact';
import ContactSticky from '@/atoms/Svg/contactSticky';
import DownloadSvg from '@/atoms/Svg/download';
import InstagramSvg from '@/atoms/Svg/instagram';
import Heading from '@/atoms/Typo/heading';
import Text from '@/atoms/Typo/text';
import { IAccordionList } from '@/models/molecules/accordions';
import Collapse from '@/molecules/collapse';
import Accordion from '@/molecules/commons/accordions';
import ContentBlock from '@/molecules/commons/contentBlock';
import ToggleWithText from '@/molecules/toggle';
import ListContentBlock from '@/organisms/commons/ContentBlock';
import ContactMap from '@/organisms/contact/map';
import sampleBlockTextJson from '../data/sampleBlockText.json';

const StyleGuideTemplate = () => {
  const list: IAccordionList = [
    {
      title: 'Scheune und Wohnhaus AR',
      item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Holzbau Plus Award 2022',
      item: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Innovation Einstellhalle arCHill',
      item: '1914 translation by H. Rackham "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"'
    },
    {
      title: 'Nachhaltigkeit mit Splittdecke',
      item: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.'
    }
  ];

  const sampleContent = [
    'Holz altert natürlich, wenn es der Witterung ausgesetzt ist. Die Dauerhaftigkeit von Holzfassaden kann wesentlich beeinflusst werden. Am effektivsten ist der konstruktive Holzschutz zum Beispiel mit Vordächern. Der chemische Holzschutz mit Anstrichen schützt meist nur die Oberfläche. In die Tiefe eingedrungenes Wasser kann dort erheblichen Schaden anrichten, wenn das Brett nicht schnell genug wieder austrocknen kann.  In die Tiefe eingedrungenes Wasser kann dort erheblichen Schaden anrichten, wenn das Brett nicht schnell genug wieder austrocknen kann. In die Tiefe eingedrungenes Wasser kann dort erheblichen Schaden anrichten, wenn das Brett nicht schnell genug wieder austrocknen kann.',
    'Wir verbauen gerne naturbelassenes Holz. Vor allem in tiefen Lagen, wo die Luftfeuchtigkeit hoch und wenig Sonnentage sind, ist es wichtig, auf hochwertiges Holz zu setzen. In höheren Lagen kann eine gewöhnliche Fichte viele Hundert Jahre Freibewitterung aushalten.',
    'Holz altert natürlich, wenn es der Witterung ausgesetzt ist. Die Dauerhaftigkeit von Holzfassaden kann wesentlich beeinflusst werden. Am effektivsten ist der konstruktive Holzschutz zum Beispiel mit Vordächern. Der chemische Holzschutz mit Anstrichen schützt meist nur die Oberfläche. In die Tiefe eingedrungenes Wasser kann dort erheblichen Schaden anrichten, wenn das Brett nicht schnell genug wieder austrocknen kann.'
  ];

  const sampleContentShort = [
    'Wir verbauen gerne naturbelassenes Holz. Vor allem in tiefen Lagen, wo die Luftfeuchtigkeit hoch und wenig Sonnentage sind, ist es wichtig, auf hochwertiges Holz zu setzen. In höheren Lagen kann eine gewöhnliche Fichte viele Hundert Jahre Freibewitterung aushalten.'
  ];

  const sampleContentTooShort = [
    'Wir verbauen gerne naturbelassenes Holz.',
    'Vor allem in tiefen Lagen, '
  ];

  const sampleContentLong = [
    'Wir verbauen gerne naturbelassenes Holz. Vor allem in tiefen Lagen, wo die Luftfeuchtigkeit hoch und wenig Sonnentage sind, ist es wichtig, auf hochwertiges Holz zu setzen. In höheren Lagen kann eine gewöhnliche Fichte viele Hundert Jahre Freibewitterung aushalten.',
    'Holz altert natürlich, wenn es der Witterung ausgesetzt ist. Die Dauerhaftigkeit von Holzfassaden kann wesentlich beeinflusst werden. Am effektivsten ist der konstruktive Holzschutz zum Beispiel mit Vordächern. Der chemische Holzschutz mit Anstrichen schützt meist nur die Oberfläche. In die Tiefe eingedrungenes Wasser kann dort erheblichen Schaden anrichten, wenn das Brett nicht schnell genug wieder austrocknen kann.',
    'Wir verbauen gerne naturbelassenes Holz. Vor allem in tiefen Lagen, wo die Luftfeuchtigkeit hoch und wenig Sonnentage sind, ist es wichtig, auf hochwertiges Holz zu setzen. In höheren Lagen kann eine gewöhnliche Fichte viele Hundert Jahre Freibewitterung aushalten.',
    'Holz altert natürlich, wenn es der Witterung ausgesetzt ist. Die Dauerhaftigkeit von Holzfassaden kann wesentlich beeinflusst werden. Am effektivsten ist der konstruktive Holzschutz zum Beispiel mit Vordächern. Der chemische Holzschutz mit Anstrichen schützt meist nur die Oberfläche. In die Tiefe eingedrungenes Wasser kann dort erheblichen Schaden anrichten, wenn das Brett nicht schnell genug wieder austrocknen kann.',
    'Wir verbauen gerne naturbelassenes Holz. Vor allem in tiefen Lagen, wo die Luftfeuchtigkeit hoch und wenig Sonnentage sind, ist es wichtig, auf hochwertiges Holz zu setzen. In höheren Lagen kann eine gewöhnliche Fichte viele Hundert Jahre Freibewitterung aushalten.',
    'Holz altert natürlich, wenn es der Witterung ausgesetzt ist. Die Dauerhaftigkeit von Holzfassaden kann wesentlich beeinflusst werden. Am effektivsten ist der konstruktive Holzschutz zum Beispiel mit Vordächern. Der chemische Holzschutz mit Anstrichen schützt meist nur die Oberfläche. In die Tiefe eingedrungenes Wasser kann dort erheblichen Schaden anrichten, wenn das Brett nicht schnell genug wieder austrocknen kann.'
  ];

  const sampleMakerPosition = [
    {
      attributes: {
        lat: 47.49861601840052,
        lng: 9.420276747114341,
        content:
          'Fecker Holzbau AG <br/> Achill Fecker <br/> Pündtstrasse 3 <br/> 9320 Arbon',
        phone: '+41 71 290 10 65',
        email: 'info@feckerholzbau.ch'
      }
    }
  ];

  return (
    <>
      <div className={`space-y-10 pt-[100px]`}>
        <div className="px-8">
          <Heading size={`h1`} renderAs={`h1`} title={`Headline 1`} />
          <Heading size={`h2`} renderAs={`h2`} title={`Heading 2`} />
          <Heading
            size={`h2`}
            renderAs={`h2`}
            title={`Heading 2 extralight`}
            className={`font-extralight`}
          />
          <Heading size={`h3`} renderAs={`h3`} title={`Heading 3`} />
          <Text
            size={`bodyText`}
            content={`Body Text Highlight / Headline Small
Lorem ipsum`}
            className={`font-bold`}
          />

          <Text
            size={`bodyText`}
            content={`Copy = Body Text
          Lorem ipsum`}
          />

          <Text
            size={`bodyTextSmall`}
            content={`Copy 2 = Body Text Small Footer
          Lorem ipsum`}
          />

          <Text size={`listDropDown`} content={`List / Drop Down List`} />

          <Text size={`numberList`} content={`numbers list`} />

          <Text size={`numberHome`} content={`numbers home`} />

          <Text size={`textOnPicture`} content={`text on pictures`} />

          <Text
            size={`menuLink`}
            content={`links (HEADER MENU / FOOTER LINKS)`}
            className={`hover:text-primary`}
          />

          <Text
            size={`menuHeadline`}
            content={`fullscreen menu headline`}
            className={`cursor-pointer hover:text-primary`}
          />

          <Text
            size={`menuHeadline`}
            content={`fullscreen menu headline Hover Me`}
            className={`cursor-pointer text-primary hover:text-white`}
          />

          <Text size={`menu`} content={`fullscreen menu`} />

          <Text size={`toggleDesc`} content={`TOGGLE BUTTON DESCRIPTION`} />

          <Text size={`btn`} content={`Button`} />
          <div>
            <Accordion list={list} />
          </div>

          <Collapse content={sampleContent} />

          <Collapse content={sampleContentShort} />

          <Collapse content={sampleContentTooShort} />

          <Collapse content={sampleContentLong} />

          <div>
            <div className={``}>Primary Colors</div>
            <div className="flex flex-wrap">
              <div className="h-[120px] w-[360px] rounded-lg bg-primary"></div>
              <div className="w-full">
                <strong>Primary</strong>/ #FF003D
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="h-[120px] w-[172px] rounded-lg bg-white"></div>
              <div className="w-full">
                <strong>White</strong>/ #FFF
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="h-[120px] w-[172px] rounded-lg bg-black"></div>
              <div className="w-full">
                <strong>Black</strong>/ #000
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="">
              <div className="flex">
                <div className="my-3 mx-2 w-[30%]">
                  <div className={` pb-4 text-rose-400`}>Primary button</div>
                  <PrimaryButton title={`Kontakt aufnehmen`} />
                </div>
                <div className={`w-[30% my-3 mx-2`}>
                  <div className={`pb-4  text-rose-400`}>Hover Button</div>
                  <PrimaryButton title={`Senden`} />
                </div>
                <div className="my-3 mx-2 w-[30%]  pb-4">
                  <div className={`text-rose-400`}>Sticky Contact Button</div>
                  <ContactSticky />
                </div>
              </div>
            </div>

            <ToggleWithText
              content={{ left: 'Kachelansicht', right: 'Listenansicht' }}
              className={`justify-start`}
            />

            <div className=" text-red-500">Hover me</div>
            <DownloadSvg />
            <ContactSvg />
            <InstagramSvg />

            <Text
              size={`menuHeadline`}
              content={`ANGEBOT`}
              className={`cursor-pointer hover:text-primary`}
            />
            <Text
              size={`menu`}
              content={`VERMIETEN`}
              className={`cursor-pointer hover:text-primary`}
            />

            <div>
              <div className=" text-red-500">Footer hover</div>
              <Text
                size={`menuLink`}
                content={`firma`}
                className={`cursor-pointer hover:text-primary`}
              />
            </div>
          </div>
          <div className="max-w-[500px] space-y-5">
            <Input placeholder={`Vorname Name`} />
            <Input placeholder={`Email`} />
            <Input placeholder={`Nachricht`} />

            <div className="flex justify-between">
              <Text
                content={`Mit dem Senden akzeptieren Sie die Datenschutzerklärung`}
                className={`w-[50%]`}
                size={`bodyTextSmall`}
              />
              <PrimaryButton title="Senden" />
            </div>
          </div>
        </div>
        <ContactMap maker={sampleMakerPosition} />
      </div>
    </>
  );
};

export default StyleGuideTemplate;
