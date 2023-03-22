import { SVGProps } from '@/models/common';
import { twMerge } from 'tailwind-merge';

const NavigationSvg = ({ className = '', ...props }: SVGProps) => {
  const defaultCls =
    'w-8 h-8 cursor-pointer transition-color duration-300 fill-transparent hover:fill-primary [&_path]:transition-color [&_path]:duration-300 [&_path]:fill-primary [&_path]:hover:fill-white md:w-[65px] md:h-[65px]';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      {...props}
      className={twMerge(defaultCls, className)}
    >
      <circle
        cx="16.0759"
        cy="16.0755"
        r="15.5755"
        transform="rotate(90 16.0759 16.0755)"
        stroke="#39c66b"
      />
      <path d="M10.5503 16.2853L16.4279 21.3846C16.4781 21.4341 16.5283 21.4341 16.5786 21.4341C16.6288 21.4341 16.7293 21.3846 16.7795 21.3351C16.8298 21.2856 16.8298 21.1865 16.8298 21.137C16.8298 21.0875 16.7795 21.038 16.7293 20.9885L10.9522 15.9883L21.8533 15.9883C22.004 15.9883 22.1045 15.8892 22.1045 15.7407C22.1045 15.5922 22.004 15.4932 21.8533 15.4932L10.9522 15.4932L16.7795 10.4929C16.88 10.3939 16.88 10.2454 16.7795 10.1464C16.7293 10.0969 16.6288 10.0473 16.5786 10.0473C16.5283 10.0473 16.4781 10.0473 16.4279 10.0969L10.5503 15.1961C10.5503 15.1961 10.2991 15.3942 10.2991 15.7407C10.2991 16.0873 10.5503 16.2853 10.5503 16.2853Z" />
    </svg>
  );
};
export default NavigationSvg;
