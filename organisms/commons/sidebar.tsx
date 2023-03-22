import Link from 'next/link';
import DownloadSvg from '@/atoms/svg/download';
import InstagramSvg from '@/atoms/svg/instagram';
import ContactSvg from '@/atoms/svg/contact';

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
        <Link href={'#'} className="my-[8px]">
          <DownloadSvg className="h-[25px] w-[25px] lg:h-[33px] lg:w-[33px]" />
        </Link>
        <Link href={'#'} className="my-[8px]">
          <InstagramSvg
            className={`h-[25px] w-[25px] lg:h-[33px] lg:w-[33px]`}
          />
        </Link>
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
        <p className=" pt-[40px] pb-[20px] text-center text-[12px] font-extrabold leading-[12px] text-black lg:fixed lg:bottom-[200px] lg:right-[-105px] lg:rotate-[-90deg]">
          © seit 1998 - Fecker Holzbau AG - 9320 Arbon
        </p>
      )}
    </>
  );
};

export default Sidebar;
