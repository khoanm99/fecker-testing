import { SVGProps } from '@/types';
import { twMerge } from 'tailwind-merge';

const ContactSvg = ({
  color = '#39c66b',
  className = '',
  ...props
}: SVGProps) => {
  const defaultCls =
    'h-[30px] w-[30px] cursor-pointer fill-black transition-all duration-500 hover:fill-primary';
  return (
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 32 30"
      xmlSpace="preserve"
      {...props}
      className={twMerge(defaultCls, className)}
    >
      <path d="M31.2,11.8l0-3.8c0-1.2-0.6-2-1.7-2.2c-0.3-0.1-0.6-0.1-0.9-0.1c-5.8,0-11.6,0-17.3,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0  C11,5.7,11,5.7,11,5.6c-0.2-0.3-0.3-0.6-0.5-0.9c-0.2-0.3-0.3-0.7-0.5-1C9.5,2.7,8.9,2,8.3,1.4C7.4,0.6,6.4,0.5,5.5,1.2  c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1C2.5,3.1,1.1,5.5,0.8,8.7c-0.2,2.4,0.3,4.9,1.6,7.2c1.4,2.7,2.9,5.2,4.1,7.3  c0.9,1.6,2.2,2.9,3.7,4c1.9,1.3,3.8,2,5.8,2c1.7,0,3.3-0.5,5-1.5c0.6-0.4,0.9-0.9,1-1.6c0-0.4,0-0.9-0.1-1.2c-0.1-0.5-0.3-1-0.6-1.5  c2.5,0,6.1,0,7.9,0c1.1,0,2.2-0.9,2.2-2.3C31.2,18,31.2,14.9,31.2,11.8z M19.3,14.8c-0.6,0.5-0.9,0.5-1.5,0l-6.4-5.2  c-0.1-0.1-0.2-0.1-0.3-0.2c0.3-0.5,0.4-1.1,0.4-1.7h16.6L19.3,14.8z M7.5,3.4c0.8,1,1.4,2.2,1.9,3.5c0.1,0.2,0.1,0.5,0.2,0.8  c0.1,0.5-0.1,0.8-0.5,1C8.9,8.9,8.8,9,8.7,9.1C8.4,9.2,8.2,9.3,8,9.4c-1.7,0.8-2.1,2.8-1.6,4.4c0.1,0.3,0.2,0.5,0.3,0.8l0.7,1.3  c0.8,1.4,1.6,2.9,2.4,4.3c0.8,1.4,2,2,3.5,1.9c0.4,0,0.8-0.2,1.2-0.4c0.3-0.1,0.6-0.3,0.9-0.5c0.1-0.1,0.3-0.2,0.4-0.2  c0.6-0.3,0.8-0.3,1.3,0.1c0.3,0.2,0.5,0.5,0.7,0.8c0.9,1.2,1.5,2.2,1.8,3.2c0.4,1,0.4,1-0.5,1.4c-1,0.5-2.1,0.8-3.5,0.8  c-1.9,0-3.8-0.9-5.5-2.5c-0.9-0.9-1.7-1.9-2.4-2.9c-1.1-1.9-2.4-4.1-3.6-6.3c-1.1-2.1-1.6-4.1-1.6-6.1c0.1-2.5,1.1-4.6,3.1-6.1  C6,3.1,6.4,2.9,6.7,2.7c0,0,0,0,0,0c0,0,0.1,0,0.1,0C7.1,3,7.3,3.2,7.5,3.4z M18.4,19.6c-1.1-0.9-2.3-1-3.5-0.3l-0.3,0.1  c-0.3,0.2-0.6,0.3-0.8,0.5c-0.4,0.2-0.7,0.3-1.1,0.1c-0.5-0.2-0.9-0.5-1.1-1l-0.9-1.6c-0.7-1.3-1.4-2.5-2.2-3.8  c-0.1-0.2-0.2-0.4-0.2-0.6c-0.1-0.7-0.1-1.2,0.4-1.6c0.3-0.2,0.6-0.4,0.9-0.6c0,0,0.1-0.1,0.1-0.1c0,0,0.1,0.1,0.1,0.1  c0.1,0.1,0.3,0.2,0.4,0.3c2.2,1.8,4.4,3.5,6.5,5.3c1.3,1,2.5,1,3.8,0l8.9-7.2l0,10.5c0,0.5,0,0.9,0,1.4c0,0.3-0.1,0.4-0.4,0.4  c-0.1,0-0.2,0-0.3,0h-8.2l-0.1,0c0,0-0.1,0-0.1,0c-0.1,0-0.1,0-0.2,0c-0.3-0.4-0.5-0.8-0.8-1.1C18.9,20.1,18.6,19.8,18.4,19.6z" />
    </svg>
  );
};
export default ContactSvg;
