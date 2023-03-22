import { motion } from 'framer-motion';
import { memo, useContext, useState, Fragment } from 'react';
import CloseSVG from 'atoms/svg/close';
import LogoSVG from 'atoms/svg/logo';
import PlusSVG from 'atoms/svg/plus';
import Link from 'next/link';
import { IAppContext } from '@/types';
import AppContext from '@/contexts/appContext';
import { twMerge } from 'tailwind-merge';
import ContactForm from '@/organisms/contactForm';

// Data
import menuData from 'data/menu.json';
import contactData from 'data/contact.json';

interface IMenuItem {
  menuItem: {
    url: string;
    title: string;
    list?: {
      url: string;
      title: string;
    }[];
  };
  id: number;
}

const Menu = () => {
  const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const clsDefault = `menu-panel fixed top-0 left-0 z-[50] h-full w-full p-[20px] bg-beige transition-all duration-300 overflow-auto xl:px-[0]`;
  const clsState = `${
    ctx.isMenuOpen ? 'translate-x-[0]' : 'translate-x-[100%]'
  }`;

  return (
    <motion.div className={twMerge(clsDefault, clsState)}>
      <MenuHeader />
      <MenuBody />
    </motion.div>
  );
};

const MenuHeader = () => {
  const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const onClick = () => {
    ctx.updateState({
      isMenuOpen: false
    });
  };
  return (
    <div className="menu-panel-header flex flex-row justify-between border-b-[1px] border-black pb-[25px] lg:border-transparent xl:pr-[20px] xl:pl-[55px]">
      <Link href="/" className="inline-block w-[70px] xl:w-[118px]">
        <LogoSVG textColor={'#000'} />
      </Link>
      <a onClick={onClick} href="#">
        <CloseSVG className="h-[26px] w-[26px]" />
      </a>
    </div>
  );
};

const MenuBody = () => {
  return (
    <div className="menu-panel-body flex-row flex-wrap lg:flex xl:px-[75px] xl:pt-[20px] 2xl:mx-auto 2xl:max-w-[1680px]">
      {menuData.main.map((item, index) => (
        <Fragment key={index}>
          <MenuItem menuItem={item} id={index} />
        </Fragment>
      ))}
      <div className="border-b-[1px] border-black py-[12px] lg:w-3/12 lg:border-transparent">
        <Link
          href="#"
          className="text-[30px] font-extrabold uppercase leading-[45px] text-black transition-all duration-300 hover:text-primary lg:inline-block lg:pb-[8px] lg:text-[30px]"
        >
          Kontakt
        </Link>
        <span className="hidden lg:block">
          <p
            className="lg:pb-[10px] lg:text-[16px] lg:leading-[24px]"
            dangerouslySetInnerHTML={{ __html: contactData.contact[0].address }}
          ></p>
          <p className="text-[16px] leading-[24px]">
            <a
              href={`tel: ${contactData.contact[0].phone}`}
              className="text-black hover:text-primary"
            >
              tel: {contactData.contact[0].phone}
            </a>
          </p>
          <p className="text-[16px] leading-[24px]">
            <a
              href={`mailto:${contactData.contact[0].email}`}
              className="text-black hover:text-primary"
            >
              {contactData.contact[0].email}
            </a>
          </p>
        </span>
      </div>
      <ContactForm className="lg:w-6/12 lg:pb-[0]" locate="menu" />
    </div>
  );
};

const MenuItem = ({ menuItem, id }: IMenuItem) => {
  const [open, setOpen] = useState<boolean>(false);
  const submenuHandle = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`relative border-b-[1px] border-black py-[12px] lg:border-transparent ${
        (id + 1) % 3 == 0 ? 'lg:w-6/12' : 'lg:w-3/12'
      }`}
    >
      <Link
        href={menuItem.url}
        className="text-[30px] font-extrabold uppercase leading-[45px] text-black transition-all duration-300 hover:text-primary lg:inline-block lg:pb-[8px] lg:text-[30px]"
      >
        {menuItem.title}
      </Link>
      {menuItem.list && (
        <>
          <a
            href="#"
            className="absolute top-[18px] right-[0] inline"
            onClick={submenuHandle}
          >
            <PlusSVG className="w-[32[px] h-[32px] lg:hidden" />
          </a>
          <span className={`${open ? 'block' : 'hidden'} lg:block`}>
            <ul className="pt-[10px]">
              {menuItem.list.map((item, key) => (
                <li
                  key={key}
                  className="pb-[15px]  uppercase leading-[20px] lg:pb-[15px]"
                >
                  <Link
                    href={item.url}
                    className="text-[20px] font-extralight text-black transition-all duration-300 hover:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </span>
        </>
      )}
    </div>
  );
};

export default memo(Menu);
