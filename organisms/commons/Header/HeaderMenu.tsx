import { useRouter } from 'next/router';
import Link from 'next/link';
import { memo } from 'react';

// Data
import menuData from '@/data/menu.json';

const HeaderMenu = () => {
  const router = useRouter();
  return (
    <ul className="hidden flex-row lg:block lg:flex lg:w-[calc(100%-118px-64px)] lg:justify-end lg:pt-[17px]">
      {menuData &&
        menuData.main.map((item, key) => (
          <li key={key} className=" lg:pr-[50px]">
            <Link
              href={item.url}
              className={`text-[16px] font-extrabold uppercase leading-[24px] text-white transition-all duration-300 hover:text-primary ${
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

export default memo(HeaderMenu);
