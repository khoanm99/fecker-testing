import AppContext from '@/contexts/appContext';
import { IAppContext } from '@/types';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import HeaderMenu from '@/organisms/commons/Header/HeaderMenu';
import HeaderLogo from '@/organisms/commons/Header/HeaderLogo';
import HeaderAction from '@/organisms/commons/Header/HeaderAction';

const Header = () => {
  const { t } = useTranslation('common');
  const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const clsHeaderDefault =
    'transition-all fixed top-0 left-0 z-50 w-full pl-[20px] lg:py-[13px]';

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

export default Header;
