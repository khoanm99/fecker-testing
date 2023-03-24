import { twMerge } from 'tailwind-merge';
import ContactStickySvg from '@/atoms/svg/contactSticky';
import contactInfo from 'data/contact.json';

const ContactSticky = ({ template }: { template?: string }) => {
  const defaultContactCls = `hidden inline lg:fixed  lg:z-[11] lg:right-[30px] lg:block lg:bottom-[30px] xl:bottom-[35px]`;
  const contactClsHome = `lg:bottom-[50px] xl:bottom-[70px]`;
  return (
    <a
      href={`tel:${contactInfo.contact[0].phone}`}
      className={twMerge(
        defaultContactCls,
        template == 'home' ? contactClsHome : ''
      )}
    >
      <ContactStickySvg />
    </a>
  );
};

export default ContactSticky;
