import { memo } from 'react';
import { IAppContext } from '@/types';
import { useContext } from 'react';
import AppContext from '@/contexts/appContext';
import PhoneSVG from '@/atoms/svg/phone';
import Link from 'next/link';

const HeaderAction = () => {
  const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const clickHandle = () => {
    ctx.updateState({
      isMenuOpen: true
    });
  };
  return (
    <div className="flex flex-col justify-around bg-primary py-[10px] px-[14px] lg:justify-start lg:bg-transparent lg:p-[0px] lg:pr-[20px] lg:pt-[10px]">
      <div
        className={`flex h-[36px] w-[36px] cursor-pointer flex-col items-center justify-center`}
        onClick={clickHandle}
      >
        <span className="h-[2px] w-[20px] rounded-[2px] bg-white lg:w-[36px] lg:bg-primary lg:bg-primary"></span>
        <span className="my-[4px] h-[2px] w-[20px] rounded-[2px] bg-white lg:my-[8px] lg:w-[36px] lg:bg-primary lg:bg-primary"></span>
        <span className="h-[2px] w-[20px] rounded-[2px] bg-white lg:w-[36px] lg:bg-primary lg:bg-primary"></span>
      </div>
      <div className="cta-phone-mail flex h-[36px] w-[36px] flex-col items-center justify-center lg:hidden">
        <Link href={`/kontakt`}>
          <PhoneSVG />
        </Link>
      </div>
    </div>
  );
};

export default memo(HeaderAction);
