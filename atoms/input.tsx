import { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<Props, any>((props, ref) => {
  const defaultCls =
    ' w-full rounded-full border border-black bg-transparent py-3 px-5 font-primary text-[14px] font-extralight placeholder:text-black lg:text-[16px]';
  return (
    <input
      ref={ref}
      {...props}
      className={twMerge(defaultCls, props.className)}
    />
  );
});

Input.displayName = `Input`;

export default Input;
