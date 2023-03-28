import { useEffect, useState } from 'react';

export const useLockBody = (isOpen?: boolean) => {
  const [isStack, setIsStack] = useState<boolean>();
  useEffect(() => {
    if (isOpen !== undefined) {
      if (isOpen) {
        if (document.documentElement.style.overflow === `hidden`) {
          setIsStack(true);
        } else {
          document.documentElement.style.overflow = `hidden`;
        }
      } else {
        if (!isStack) {
          document.documentElement.style.overflow = ``;
          document.documentElement.removeAttribute(`style`);
        }
      }
    }
  }, [isOpen]);
};
