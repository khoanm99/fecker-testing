import { memo } from 'react';
import Link from 'next/link';
import LogoSVG from '@/atoms/svg/logo';

const HeaderLogo = () => {
  return (
    <div className="w-[70px] pt-[20px] md:h-[80px] md:w-[118px] lg:pt-[0px]">
      <Link href={'/'}>
        <LogoSVG />
      </Link>
    </div>
  );
};

export default memo(HeaderLogo);
