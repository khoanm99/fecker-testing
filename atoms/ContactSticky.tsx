import { twMerge } from 'tailwind-merge';
import ContactStickySvg from '@/atoms/svg/contactSticky';
import contactInfo from 'data/contact.json';
import Link from 'next/link';

const ContactSticky = ({ template }: { template?: string }) => {
  const defaultContactCls = `hidden lg:inline lg:fixed  lg:z-[11] lg:right-[30px] lg:block lg:bottom-[30px] xl:bottom-[35px]`;
  const contactClsHome = `lg:bottom-[50px] xl:bottom-[70px]`;
  return (
    <Link
      href={`/kontakt`}
      className={twMerge(
        defaultContactCls,
        template == 'home' ? contactClsHome : ''
      )}
    >
      <ContactStickySvg />
    </Link>
  );
};

export default ContactSticky;
