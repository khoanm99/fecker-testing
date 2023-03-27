import { ContactSectionEntityResponse } from '@/graphql/generated';
import HeroSection from '@/organisms/slider/hero';
import ContactMap from '@/organisms/contact/map';

// Data
import contactInfo from 'data/contact.json';
import IntroContent from '@/molecules/hero/heroIntroContent';

interface Props {
  dataResponse?: {
    contactSection?: ContactSectionEntityResponse;
  };
}

const location = [
  {
    attributes: {
      lat: 47.49861601840052,
      lng: 9.420276747114341,
      content: `${contactInfo.contact[0].address}`,
      phone: `${contactInfo.contact[0].phone}`,
      email: `${contactInfo.contact[0].email}`
    }
  }
];

const ContactTemplate = ({ dataResponse }: Props) => {
  const contactSection = dataResponse?.contactSection;
  const introContent = contactSection?.data?.attributes?.introContent;
  return (
    <>
      {dataResponse && contactSection && (
        <div className={'pb-[60px]'}>
          {contactSection?.data?.attributes?.heroSlider && (
            <HeroSection
              heroSectionData={contactSection?.data?.attributes?.heroSlider}
              templateName={`subPage`}
            />
          )}

          {introContent && (
            <IntroContent introContent={introContent} templateName="subPage">
              <ContactMap maker={location} />
            </IntroContent>
          )}
        </div>
      )}
    </>
  );
};

export default ContactTemplate;
