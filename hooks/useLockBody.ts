import { useEffect, useState } from 'react';

export const useLockScroll = (isOpen?: boolean) => {
  const [isLockScroll, setIsLockScroll] = useState<boolean>();
  useEffect(() => {
    if (isOpen !== undefined) {
      if (isOpen) {
        if (document.documentElement.style.overflow === `hidden`) {
          setIsLockScroll(true);
        } else {
          document.documentElement.style.overflow = `hidden`;
        }
      } else {
        if (!isLockScroll) {
          document.documentElement.style.overflow = ``;
          document.documentElement.removeAttribute(`style`);
        }
      }
    }
  }, [isOpen]);
};
