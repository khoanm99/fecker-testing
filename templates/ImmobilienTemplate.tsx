import IntroContent from '@/molecules/hero/heroIntroContent';
import ListContentBlock from '@/organisms/commons/ContentBlock';
import HeroSection from '@/organisms/slider/hero';
import Container from '@/components/container';
import { ImmobilienSectionEntityResponse } from '@/graphql/generated';
import { Fragment } from 'react';

interface Props {
  dataResponse: {
    immobilienSection: ImmobilienSectionEntityResponse;
  };
}

const ImmobilienTemplate = ({ dataResponse }: Props) => {
  const pageData = dataResponse?.immobilienSection;
  const introContent = pageData?.data?.attributes?.introContent;
  return (
    <>
      {dataResponse && pageData && (
        <div className={'pb-[60px]'}>
          {pageData && pageData.data?.attributes?.heroSlider && (
            <HeroSection
              heroSectionData={pageData.data?.attributes?.heroSlider}
              templateName={`subPage`}
            />
          )}

          {introContent && (
            <IntroContent
              introContent={introContent}
              templateName={`subPage`}
            />
          )}
          {pageData.data?.attributes?.contents &&
            pageData.data?.attributes?.contents.map((itemContent, key) => {
              if (!itemContent?.__typename) return <></>;
              switch (itemContent.__typename) {
                case 'ComponentContentTextBlocks':
                  return (
                    <Fragment key={key}>
                      {itemContent.textBlocks && (
                        <Container layout={'full'} key={key}>
                          <ListContentBlock
                            textBlock={itemContent.textBlocks}
                          />
                        </Container>
                      )}
                    </Fragment>
                  );
              }
            })}
        </div>
      )}
    </>
  );
};

export default ImmobilienTemplate;
