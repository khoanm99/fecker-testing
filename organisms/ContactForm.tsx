import Input from '@/atoms/input';
import Text from '@/atoms/Typo/text';
import PrimaryButton from '@/atoms/button';

const ContactForm = () => {
  return (
    <form className="pb-[30px]">
      <Input placeholder={`Vorname Name`} className="mb-[14px]" />
      <Input placeholder={`Email`} className="mb-[14px]" />
      <Input placeholder={`Nachricht`} className="mb-[14px]" />
      <div className="lg:flex lg:justify-between lg:pt-[30px] lg:pb-[20px]">
        <Text
          content={`Mit dem Senden akzeptieren Sie die Datenschutzerklärung`}
          className={`py-[10px] lg:w-[50%] lg:py-[0px]`}
          size={`bodyTextSmall`}
        />
        <p>
          <PrimaryButton title="Senden" className="my-[20px] lg:m-[0px]" />
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
