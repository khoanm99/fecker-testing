import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react';
import { IAppContext, IAppState, IAppStateChange } from '../types';

const appState: IAppState = {
  curLang: 'de',
  isSticky: false,
  // isFormOpen: false,
  isMenuOpen: false,
  skippedToContent: false
};

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({ ...appState });
  const updateState = (newState: IAppStateChange) => {
    setState(prevState => ({
      ...prevState,
      ...newState
    }));
  };

  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      updateState({
        curLang: router.locale ?? 'de'
      });
    }
  }, [router.isReady, router.locale]);

  return (
    <AppContext.Provider value={{ ...state, updateState: updateState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
