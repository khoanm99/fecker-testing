import {
  TeamEntityResponseCollection,
  TeamSectionEntityResponse
} from '@/graphql/generated';
import HeroSection from '@/organisms/slider/hero';

import { Fragment } from 'react';
import StorySlider from '@/organisms/slider/story';
import PartnerSlider from '@/organisms/slider/partner';
import TeamSection from '@/organisms/teams';
import IntroContent from '@/molecules/hero/heroIntroContent';
import Container from '@/components/container';

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

          {teams && (
            <Container layout={'grid'} id={'team'}>
              <TeamSection dataTeams={teams} />
            </Container>
          )}

          {teamSection?.data?.attributes?.contents &&
            teamSection.data.attributes.contents.map(
              (item: any, key: number) => {
                switch (item.__typename) {
                  case 'ComponentContentStory':
                    return (
                      <Fragment key={key}>
                        <Container layout={'grid'} id={'geschichte'}>
                          <StorySlider data={item} title={item.title} />
                        </Container>
                      </Fragment>
                    );
                  case 'ComponentContentPartner':
                    return (
                      <Fragment key={key}>
                        <Container layout={'full'} id={'verbaende-partner'}>
                          <PartnerSlider data={item} title={item.title} />
                        </Container>
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
