import Input from '@/atoms/input';
import Text from '@/atoms/typo/text';
import PrimaryButton from '@/atoms/button';

const ContactForm = ({
  className,
  locate
}: {
  className?: string;
  locate?: string;
}) => {
  return (
    <form className={`${className} pb-[30px]`}>
      <Input placeholder={`Vorname Name`} className="mb-[14px]" />
      <Input placeholder={`Email`} className="mb-[14px]" />
      <Input placeholder={`Nachricht`} className="mb-[14px]" />
      <div
        className={`lg:pt-[30px] lg:pb-[20px] ${
          locate === 'menu'
            ? 'xl:flex xl:justify-between'
            : 'lg:flex lg:justify-between '
        }`}
      >
        <Text
          content={`Mit dem Senden akzeptieren Sie die Datenschutzerklärung`}
          className={`py-[10px] lg:py-[0px] ${
            locate === 'menu' ? '' : 'lg:w-[50%]'
          }`}
          size={`bodyTextSmall`}
        />
        <p>
          <PrimaryButton
            title="Senden"
            className={`my-[20px] ${
              locate === 'menu' ? 'lg:mb-[0] xl:mt-[0]' : 'lg:m-[0px]'
            }`}
          />
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
