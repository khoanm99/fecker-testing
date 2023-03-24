import {
  TeamEntityResponseCollection,
  TeamSectionEntityResponse
} from '@/graphql/generated';
import HeroSection from '@/organisms/hero';

import { Fragment } from 'react';
import StorySlider from '@/organisms/slider/story';
import PartnerSlider from '@/organisms/slider/partner';
import TeamSection from '@/organisms/team/teamCard';

interface Props {
  dataTeamSection?: TeamSectionEntityResponse;
  dataTeams?: TeamEntityResponseCollection;
}

const FirmaTemplate = ({ dataTeamSection, dataTeams }: Props) => {
  return (
    <div className={'pb-[60px]'}>
      {dataTeamSection && dataTeamSection.data?.attributes?.heroSlider && (
        <HeroSection
          heroSectionData={dataTeamSection.data.attributes.heroSlider}
          introContent={
            dataTeamSection.data.attributes.introContent ?? undefined
          }
          templateName="subPage"
        />
      )}

      {dataTeams && <TeamSection dataTeams={dataTeams} />}

      {dataTeamSection?.data?.attributes?.contents &&
        dataTeamSection.data.attributes.contents.map(
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
  );
};

export default FirmaTemplate;
