import { motion } from 'framer-motion';
import { memo, useContext, useState, Fragment, useRef, useEffect } from 'react';
import CloseSVG from 'atoms/svg/close';
import LogoSVG from 'atoms/svg/logo';
import PlusSVG from 'atoms/svg/plus';
import Link from 'next/link';
import { IAppContext } from '@/types';
import AppContext from '@/contexts/appContext';
import { twMerge } from 'tailwind-merge';
import ContactForm from '@/organisms/contactForm';
import Sidebar from '@/organisms/commons/sidebar';

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
  onClick: any;
  id: number;
}

const Menu = () => {
  const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const clsDefault = `menu-panel fixed flex flex-col justify-between top-0 left-0 z-[50] h-full w-full p-[20px] bg-beige transition-all duration-300 overflow-auto xl:px-[0] xl:py-[25px] translate-x-[100%]`;
  const clsState = `${ctx?.isMenuOpen ? '!translate-x-[0]' : ''}`;

  const onClick = () => {
    ctx.updateState({
      isMenuOpen: false
    });
  };

  return (
    <motion.div className={twMerge(clsDefault, clsState)}>
      <div>
        <MenuHeader />
        <MenuBody onClick={onClick} />
      </div>
      <Sidebar locate={'menu'} />
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
    <div className="menu-panel-header flex flex-row justify-between border-b-[1px] border-black pb-[25px] lg:border-transparent lg:pr-[7px] xl:pr-[25px] xl:pr-[27px] xl:pl-[55px]">
      <Link href="/" className="inline-block w-[70px] xl:w-[118px]">
        <LogoSVG textColor={'#000'} />
      </Link>
      <span onClick={onClick} className="h-[26px] w-[26px] cursor-pointer">
        <CloseSVG className="h-[26px] w-[26px]" />
      </span>
    </div>
  );
};

const MenuBody = ({ onClick }: any) => {
  return (
    <div className="menu-panel-body flex-row flex-wrap lg:flex xl:px-[75px] xl:pt-[20px] 2xl:mx-auto 2xl:max-w-[1680px]">
      {menuData.main.map((item, index) => (
        <Fragment key={index}>
          <MenuItem menuItem={item} id={index} onClick={onClick} />
        </Fragment>
      ))}
      <div className="border-b-[1px] border-black py-[12px] lg:w-3/12 lg:border-transparent">
        <Link
          onClick={onClick}
          href="/kontakt"
          className="text-[30px] font-extrabold uppercase leading-[45px] text-black transition-all duration-300 hover:text-primary lg:inline-block lg:pb-[8px] lg:text-[30px]"
        >
          Kontakt
        </Link>
        <span className="hidden lg:block">
          <p
            className="font-extralight lg:pb-[10px] lg:text-[16px] lg:leading-[24px]"
            dangerouslySetInnerHTML={{ __html: contactData.contact[0].address }}
          ></p>
          <p className="text-[16px] leading-[24px]">
            <a
              href={`tel: ${contactData.contact[0].phone}`}
              className="font-extralight text-black hover:text-primary"
            >
              tel: {contactData.contact[0].phone}
            </a>
          </p>
          <p className="text-[16px] leading-[24px]">
            <a
              href={`mailto:${contactData.contact[0].email}`}
              className="font-extralight text-black hover:text-primary"
            >
              {contactData.contact[0].email}
            </a>
          </p>
        </span>
      </div>
      <ContactForm
        className="hidden lg:block lg:w-6/12 lg:pb-[0]"
        locate="menu"
      />
    </div>
  );
};

const MenuItem = ({ menuItem, id, onClick }: IMenuItem) => {
  const [open, setOpen] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLSpanElement | null>(null);
  const defaultHeightRef = useRef<number>(70);
  const heightRef = useRef<number>(0);
  useEffect(() => {
    if (listRef.current && divRef.current) {
      heightRef.current = listRef.current?.offsetHeight || 0;
    }
  }, []);

  useEffect(() => {
    if (window && window.innerWidth < 769 && divRef.current) {
      if (open) {
        divRef.current.style.height = `${
          defaultHeightRef.current + heightRef.current
        }px`;
      } else {
        divRef.current.style.height = `${defaultHeightRef.current}px`;
      }
    }
  }, [open]);

  const submenuHandle = (e: any) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div
      ref={divRef}
      className={`relative overflow-hidden border-b-[1px] border-black py-[12px] transition-all duration-300 max-lg:h-[70px] lg:border-transparent ${
        (id + 1) % 3 == 0 ? 'lg:w-6/12' : 'lg:w-3/12'
      }`}
    >
      <Link
        onClick={onClick}
        href={menuItem.url}
        className="text-[30px] font-extrabold uppercase leading-[45px] text-black transition-all duration-300 hover:text-primary lg:inline-block lg:pb-[8px] lg:text-[30px]"
      >
        {menuItem.title}
      </Link>
      {menuItem.list && (
        <>
          <span
            className="absolute top-[18px] right-[0] inline cursor-pointer"
            onClick={submenuHandle}
          >
            <PlusSVG
              className={`w-[32[px] h-[32px] transition-all duration-300 lg:hidden ${
                open ? 'rotate-[45deg]' : ''
              }`}
            />
          </span>
          <span ref={listRef} className={`block`}>
            <ul className="pt-[10px]">
              {menuItem.list.map((item, key) => (
                <li
                  key={key}
                  className="pb-[15px]  uppercase leading-[20px] lg:pb-[15px]"
                >
                  <Link
                    onClick={onClick}
                    href={item.url}
                    className="text-[20px] font-light text-black transition-all duration-300 hover:text-primary"
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
