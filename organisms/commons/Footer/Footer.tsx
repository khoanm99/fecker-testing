import { memo } from 'react';
import FooterMenu from '@/organisms/commons/Footer/FooterMenu';
import ContactForm from '@/organisms/ContactForm';
import Text from '@/atoms/Typo/text';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="m-auto p-[20px] md:flex md:flex-row-reverse lg:flex lg:p-[30px] xl:max-w-[1120px] xl:px-[0px] 2xl:max-w-[1260px] 3xl:max-w-[1500px]"
    >
      <div className="py-[10px] md:flex md:w-1/2 md:flex-row md:flex-row-reverse md:justify-between md:pl-[20px] xl:pl-[65px]">
        <FooterMenu />
      </div>
      <div className="py-[10px] md:w-1/2 md:pr-[20px] xl:pr-[65px]">
        <ContactForm />
        <Text
          renderAs={'p'}
          content="© seit 1998 - Fecker Holzbau AG - 9320 Arbon"
          className="text-center text-[12px] font-bold leading-[12px] md:hidden"
        />
      </div>
    </footer>
  );
};

export default memo(Footer);
