import { memo } from 'react';
import FooterMenu from '@/organisms/commons/Footer/FooterMenu';
import ContactForm from '@/organisms/ContactForm';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="m-auto p-[20px] md:flex md:flex-row-reverse lg:flex lg:p-[30px] xl:max-w-[1120px] xl:px-[0px] 2xl:max-w-[1260px]"
    >
      <div className="py-[10px] md:flex md:w-1/2 md:flex-row md:flex-row-reverse md:justify-between">
        <FooterMenu />
      </div>
      <div className="py-[10px] md:w-1/2">
        <ContactForm />
        <p className="text-center text-[12px] font-bold leading-[12px] md:hidden">
          © seit 1998 - Fecker Holzbau AG - 9320 Arbon
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
