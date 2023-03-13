import AppContext from '@/contexts/appContext';
import { IAppContext } from '@/types';
import router from 'next/router';
import { useContext, useEffect } from 'react';

function useResetState() {
  const ctx: IAppContext = useContext(AppContext) as IAppContext;
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      ctx.updateState({
        isMenuOpen: false,
        isFormOpen: false,
        isSticky: false
      });
      document.body.removeAttribute('style');
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);
}

export default useResetState;
