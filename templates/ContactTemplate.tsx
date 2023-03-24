import { ContactSectionEntityResponse } from '@/graphql/generated';
import HeroSection from '@/organisms/hero';
import ContactMap from '@/organisms/contact/map';

// Data
import contactInfo from 'data/contact.json';

interface Props {
  dataResponse: ContactSectionEntityResponse;
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
  return (
    <div className={'pb-[60px]'}>
      {dataResponse?.data?.attributes?.heroSlider && (
        <HeroSection
          heroSectionData={dataResponse.data.attributes.heroSlider}
          introContent={dataResponse.data.attributes.introContent ?? undefined}
          templateName="subPage"
        />
      )}
      <ContactMap maker={location} />
    </div>
  );
};

export default ContactTemplate;
