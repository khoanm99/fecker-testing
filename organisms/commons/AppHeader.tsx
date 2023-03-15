import AppContext from '@/contexts/appContext';
import { IAppContext } from '@/types';
import clsx from 'clsx';

import { useTranslation } from 'next-i18next';

import { useRouter } from 'next/router';
import { useContext } from 'react';

const AppHeader = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const ctx: IAppContext = useContext(AppContext) as IAppContext;
  const clsHeaderDefault =
    'transition-all fixed top-0 left-0 z-50 px-4 pt-5 w-full lg:px-5 xl:py-6 xl:px-10 xl:pb-0';

  const clickHandle = () => {
    ctx.updateState({
      isMenuOpen: true
    });
  };

  // const gotoHome = () => {
  //   router.push(`/${typeof alternate === 'string' ? '#' + alternate : ''}`);
  // };

  return (
    <header id="header" className={clsx(clsHeaderDefault)}>
      <div
        className={`grid grid-cols-12 items-center gap-4 border-b pb-6 transition-all ${
          ctx.isSticky ? ' border-bright' : 'border-transparent'
        }`}
      >
        <div className="col-span-4"></div>
        <div className="col-span-3 flex justify-end lg:col-span-4 lg:justify-center"></div>
        <div className="col-span-5 flex justify-end lg:col-span-4"></div>
      </div>
    </header>
  );
};

export default AppHeader;
