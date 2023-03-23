import Heading from '@/atoms/typo/heading';
import Text from '@/atoms/typo/text';
import { ComponentBasicIntroContent } from '@/graphql/generated';
import Collapse from '../collapse';

const HeroIntroText = ({
  introContent,
  templateName = 'home'
}: {
  introContent: ComponentBasicIntroContent;
  templateName?: string;
}) => {
  const defaultIntroText =
    'relative z-[10] mt-[55px] ml-auto mr-0 bg-beige px-5 lg:-mt-[220px] lg:max-w-[880px] lg:pl-[6vw] lg:pt-[54px] xl:max-w-[85.5vw]';
  const result =
    introContent &&
    introContent.content &&
    introContent?.content.split(/\r?\n/).filter(item => item != '');
  return (
    <>
      {introContent && (
        <>
          {templateName == 'home' && (
            <div
              className={`mt-[55px] bg-beige px-5 text-center lg:relative lg:z-[10] lg:mx-auto lg:-mt-[120px] lg:max-w-[695px] lg:px-11 lg:py-10 xl:-mt-[154px] xl:max-w-[870px] xl:py-12 xl:px-[54px] 2xl:max-w-[980px] 2xl:px-[60px] 2xl:py-[54px]`}
            >
              {templateName == 'home' && introContent.content && (
                <Text
                  size={`bodyTextSmall`}
                  content={introContent.content}
                  className={`lg:text-[20px]`}
                />
              )}
            </div>
          )}
          {templateName == 'subPage' && (
            <div className={defaultIntroText}>
              {introContent.title && (
                <Heading
                  size={`h2`}
                  renderAs={`h2`}
                  title={introContent.title}
                  className={``}
                />
              )}
              {introContent.description && (
                <Heading
                  size={`h2`}
                  renderAs={`h3`}
                  title={introContent.description}
                  className={`font-extralight`}
                />
              )}
              {result && (
                <Collapse
                  content={result}
                  className={`max-w-[770px]  pt-[30px] lg:ml-14 `}
                />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default HeroIntroText;
