import { memo } from 'react';
import Link from 'next/link';
import InstagramSvg from '@/atoms/Svg/instagram';

// Data
import contactData from 'data/contact.json';
import menuData from 'data/menu.json';

const FooterMenu = () => {
  return (
    <>
      <Menu />
      <ContactInfo />
    </>
  );
};

const ContactInfo = () => {
  return (
    <div className="text-[14px] font-extralight leading-[21px] lg:text-[16px] lg:leading-[24px] xl:w-auto">
      <p
        className="pb-[25px]"
        dangerouslySetInnerHTML={{ __html: contactData.contact[0].address }}
      ></p>
      <ul className="pb-[25px]">
        <li>
          <a href={`tel:${contactData.contact[0].phone}`}>
            tel:{contactData.contact[0].phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${contactData.contact[0].email}`}>
            {contactData.contact[0].email}
          </a>
        </li>
      </ul>
      <p className="hidden md:pb-[25px] lg:block">
        <span>Folgen Sie uns: </span>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com"
          className="inline-block lg:h-[33px] lg:w-[33px]"
        >
          <InstagramSvg className="inline" />
        </a>
      </p>
      <p className="hidden text-left text-[12px] font-bold leading-[12px] md:block">
        © seit 1998 - Fecker Holzbau AG - 9320 Arbon
      </p>
    </div>
  );
};

const Menu = () => {
  return (
    <ul className="pb-[30px] xl:w-auto">
      {menuData &&
        menuData.footer.map((item, index) => (
          <li
            key={index}
            className={`pb-[5px] ${
              item.mobile && item.mobile.hidden ? 'hidden lg:block' : ''
            } md:text-right lg:pb-[10px]`}
          >
            <Link
              href={item.url}
              className={
                'text-[16px] font-extrabold uppercase leading-[24px] text-black transition-all  duration-300 hover:text-primary'
              }
            >
              {item.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default memo(FooterMenu);
