import Link from 'next/link';
import DownloadSvg from '@/atoms/svg/download';
import InstagramSvg from '@/atoms/svg/instagram';
import ContactSvg from '@/atoms/svg/contact';

// data
import contactData from '../../data/contact.json';

const Sidebar = ({ locate }: { locate?: string }) => {
  return (
    <>
      <div
        className={`absolute right-[0] flex h-[310px] w-[64px] flex-col items-center bg-white py-[15px] ${
          locate === 'menu'
            ? 'invisible lg:visible lg:top-[60px] lg:h-[330px] lg:w-[80px] xl:top-[70px]'
            : 'top-[0] lg:hidden'
        }`}
      >
        <Link href={'/downloads'} className="my-[8px]">
          <DownloadSvg className="h-[25px] w-[25px] lg:h-[33px] lg:w-[33px]" />
        </Link>
        <a
          href={contactData.contact[0].instagram}
          target="_blank"
          rel="noreferrer"
          className="my-[8px]"
        >
          <InstagramSvg
            className={`h-[25px] w-[25px] lg:h-[33px] lg:w-[33px]`}
          />
        </a>
        <Link href={'#'} className="my-[8px] mb-[70px]">
          <ContactSvg className={'h-[25px] w-[25px] lg:h-[33px] lg:w-[33px]'} />
        </Link>
        <Link
          href={'/impressum'}
          className="block inline-block w-[105px] rotate-[-90deg] text-[20px] font-light uppercase leading-[30px] text-black transition-all duration-300 hover:text-primary"
        >
          Impressum
        </Link>
      </div>
      {locate === 'menu' && (
        <p className="pt-[40px] pb-[20px] text-center text-[12px] font-extrabold leading-[12px] text-black xl:fixed xl:bottom-[200px] xl:right-[-100px] xl:rotate-[-90deg] xl:pt-[0] xl:pb-[0]">
          © seit 1998 - Fecker Holzbau AG - 9320 Arbon
        </p>
      )}
    </>
  );
};

export default Sidebar;
