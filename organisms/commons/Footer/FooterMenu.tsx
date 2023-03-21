import { memo } from 'react';
import Link from 'next/link';

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
    <div className="text-[14px] font-extralight leading-[21px] md:text-[16px] md:leading-[24px] xl:w-1/2">
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
      <p className="hidden md:block md:pb-[25px]">
        <span>Folgen Sie uns: </span>
        <a target="_blank" rel="noreferrer" href="https://instagram.com">
          Instagram Icon
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
    <ul className="pb-[30px] xl:w-[1/2]">
      {menuData &&
        menuData.footer.map((item, index) => (
          <li
            key={index}
            className={`pb-[5px] ${
              item.mobile && item.mobile.hidden ? 'hidden lg:block' : ''
            }`}
          >
            <Link
              href={item.url}
              className={
                'text-[16px] font-extrabold uppercase leading-[24px] text-black transition-all duration-300 hover:text-green'
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
