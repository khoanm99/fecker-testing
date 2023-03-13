import { useEffect, RefObject } from 'react';

const useOutsideClick = (
  ref: RefObject<any>,
  // eslint-disable-next-line no-unused-vars
  callback: (event: MouseEvent) => void
) => {
  const listener = (event: MouseEvent) => {
    if (!ref.current || ref.current.contains(event.target as Node)) return;
    callback(event);
  };

  useEffect(() => {
    document.addEventListener('click', listener);

    return () => document.removeEventListener('click', listener);
    // eslint-disable-next-line
  }, []);
};

export default useOutsideClick;
