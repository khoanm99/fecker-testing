import clsx from 'clsx';
import HeaderMenu from '@/organisms/commons/header/headerMenu';
import HeaderLogo from '@/organisms/commons/header/headerLogo';
import HeaderAction from '@/organisms/commons/header/headerAction';
// import { useTranslation } from 'next-i18next';

const Header = ({ sticky }: { sticky: Boolean }) => {
  // const { t } = useTranslation('common');
  const clsHeaderDefault =
    'transition-all fixed top-0 left-0 z-50 w-full pl-[20px] lg:py-[13px]';

  return (
    <header id="header" className={clsx(clsHeaderDefault)}>
      <div className={`flex w-full flex-row justify-between lg:justify-end`}>
        <HeaderLogo />
        <HeaderMenu
          className={`${
            sticky
              ? 'lg:translate-y-[-60px] lg:opacity-0'
              : 'lg:opacity-1 lg:translate-y-[0]'
          }`}
        />
        <HeaderAction />
      </div>
    </header>
  );
};

export default Header;
