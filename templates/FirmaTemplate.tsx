import {
  TeamEntityResponseCollection,
  TeamSectionEntityResponse
} from '@/graphql/generated';
import HeroSection from '@/organisms/hero';

import { Fragment } from 'react';
import StorySlider from '@/organisms/slider/story';
import PartnerSlider from '@/organisms/slider/partner';
import TeamSection from '@/organisms/teams';
import IntroContent from '@/molecules/hero/heroIntroContent';

interface Props {
  dataResponse: {
    teamSection?: TeamSectionEntityResponse;
    teams?: TeamEntityResponseCollection;
  };
}

const FirmaTemplate = ({ dataResponse }: Props) => {
  const teamSection = dataResponse?.teamSection;
  const introContent = teamSection?.data?.attributes?.introContent;
  const teams = dataResponse?.teams;
  return (
    <>
      {dataResponse && (
        <div className={'pb-[60px]'}>
          {teamSection && teamSection.data?.attributes?.heroSlider && (
            <HeroSection
              heroSectionData={teamSection.data.attributes.heroSlider}
              templateName={`subPage`}
            />
          )}
          {introContent && (
            <IntroContent introContent={introContent} templateName="subPage" />
          )}

          {teams && <TeamSection dataTeams={teams} />}

          {teamSection?.data?.attributes?.contents &&
            teamSection.data.attributes.contents.map(
              (item: any, key: number) => {
                switch (item.__typename) {
                  case 'ComponentContentStory':
                    return (
                      <Fragment key={key}>
                        <StorySlider data={item} title={item.title} />
                      </Fragment>
                    );
                  case 'ComponentContentPartner':
                    return (
                      <Fragment key={key}>
                        <PartnerSlider data={item} title={item.title} />
                      </Fragment>
                    );
                }
              }
            )}
        </div>
      )}
    </>
  );
};

export default FirmaTemplate;
