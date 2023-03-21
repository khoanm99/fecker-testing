import { memo } from 'react';
import { IAppContext } from '@/types';
import { useContext } from 'react';
import AppContext from '@/contexts/appContext';
import contactData from '@/data/contact.json';
import PhoneSVG from '@/atoms/Svg/phone';

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
        className={`flex h-[36px] w-[36px] cursor-pointer flex-col items-center justify-center`}
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

export default memo(HeaderAction);
