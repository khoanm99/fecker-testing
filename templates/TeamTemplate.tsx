import {
  TeamSectionEntityResponse,
  ComponentContentStory
} from '@/graphql/generated';
import HeroSection from '@/organisms/hero';
import { Fragment } from 'react';
import StorySlider from '@/organisms/slider/story';

interface Props {
  dataResponse: TeamSectionEntityResponse;
}

const TeamTemplate = ({ dataResponse }: Props) => {
  return (
    <div className={'pb-[60px]'}>
      {dataResponse.data?.attributes?.heroSlider && (
        <HeroSection
          heroSectionData={dataResponse.data.attributes.heroSlider}
          introContent={dataResponse.data.attributes.introContent ?? undefined}
          templateName="subPage"
        />
      )}
      {dataResponse?.data?.attributes?.contents &&
        dataResponse.data.attributes.contents.map((item: any, key: number) => {
          switch (item.__typename) {
            case 'ComponentContentStory':
              return (
                <Fragment key={key}>
                  <StorySlider data={item} title={item.title} />
                </Fragment>
              );
          }
        })}
    </div>
  );
};

export default TeamTemplate;
