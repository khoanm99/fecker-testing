import AppContext from '@/contexts/appContext';
import { IAppContext } from '@/types';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import LogoSVG from 'atoms/Svg/logo';
import PhoneSVG from 'atoms/Svg/phone';
import Link from 'next/link';

// Data
import menuData from 'data/menu.json';
import contactData from 'data/contact.json';

const Header = () => {
  const { t } = useTranslation('common');
  const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const clsHeaderDefault =
    'transition-all fixed top-0 left-0 z-50 w-full pl-[20px] lg:py-[13px]';

  // const gotoHome = () => {
  //   router.push(`/${typeof alternate === 'string' ? '#' + alternate : ''}`);
  // };

  return (
    <header id="header" className={clsx(clsHeaderDefault)}>
      <div
        className={`flex w-full flex-row justify-between lg:justify-end ${
          ctx.isSticky ? ' border-bright' : 'border-transparent'
        }`}
      >
        <HeaderLogo />
        <HeaderMenu />
        <HeaderAction />
      </div>
    </header>
  );
};

const HeaderLogo = () => {
  return (
    <div className="w-[70px] pt-[20px] md:h-[80px] md:w-[118px] lg:pt-[0px]">
      <Link href={'/'}>
        <LogoSVG />
      </Link>
    </div>
  );
};

const HeaderMenu = () => {
  const router = useRouter();
  return (
    <ul className="hidden flex-row lg:block lg:flex lg:w-[calc(100%-118px-64px)] lg:justify-end lg:pt-[17px]">
      {menuData &&
        menuData.main.map((item, key) => (
          <li key={key} className=" lg:pr-[50px]">
            <Link
              href={item.url}
              className={`text-[16px] font-extrabold uppercase leading-[24px] text-white transition-all hover:text-green ${
                router.asPath === item.url ? 'underline underline-offset-4' : ''
              }`}
            >
              {item.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

const HeaderAction = () => {
  const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const clickHandle = () => {
    ctx.updateState({
      isMenuOpen: true
    });
  };

  return (
    <div className="flex flex-col justify-around bg-green py-[10px] px-[14px] lg:justify-start lg:bg-transparent lg:p-[0px] lg:pr-[20px] lg:pt-[10px]">
      <div
        className="flex h-[36px] w-[36px] cursor-pointer flex-col items-center justify-center"
        onClick={clickHandle}
      >
        <span className="h-[2px] w-[20px] rounded-[2px] bg-white lg:w-[36px] lg:bg-green"></span>
        <span className="my-[4px] h-[2px] w-[20px] rounded-[2px] bg-white lg:my-[8px] lg:w-[36px] lg:bg-green"></span>
        <span className="h-[2px] w-[20px] rounded-[2px] bg-white lg:w-[36px] lg:bg-green"></span>
      </div>
      <div className="cta-phone-mail flex h-[36px] w-[36px] flex-col items-center justify-center lg:hidden">
        <a href={`mailto:${contactData.contact[0].email}`}>
          <PhoneSVG />
        </a>
      </div>
    </div>
  );
};

export default Header;
