import { SVGProps } from '@/types';
import { twMerge } from 'tailwind-merge';

const InstagramSvg = ({
  color = '#39c66b',
  className = '',
  ...props
}: SVGProps) => {
  const defaultCls =
    'transition-all duration-500 fill-black hover:fill-primary cursor-pointer';
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      {...props}
      className={twMerge(defaultCls, className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 4.125C13.139 4.125 12.7182 4.13903 11.3982 4.19925C10.0807 4.25947 9.1806 4.46902 8.39355 4.7751C7.56855 5.0853 6.82027 5.57205 6.20152 6.20235C5.57223 6.82039 5.08518 7.56813 4.77428 8.39355C4.46985 9.1806 4.25947 10.0815 4.19925 11.399C4.13985 12.7182 4.125 13.1381 4.125 16.5C4.125 19.8619 4.13903 20.2818 4.19925 21.6018C4.25947 22.9193 4.46902 23.8194 4.7751 24.6064C5.0853 25.4314 5.57205 26.1797 6.20235 26.7985C6.8204 27.4277 7.56815 27.9148 8.39355 28.2257C9.1806 28.531 10.0807 28.7405 11.3982 28.8007C12.7182 28.861 13.139 28.875 16.5 28.875C19.861 28.875 20.2818 28.861 21.6018 28.8007C22.9193 28.7405 23.8194 28.531 24.6064 28.2249C25.4314 27.9147 26.1797 27.4279 26.7985 26.7976C27.4278 26.1796 27.9148 25.4319 28.2257 24.6064C28.531 23.8194 28.7405 22.9193 28.8007 21.6018C28.861 20.2818 28.875 19.861 28.875 16.5C28.875 13.139 28.861 12.7182 28.8007 11.3982C28.7405 10.0807 28.531 9.1806 28.2249 8.39355C27.9142 7.56778 27.4271 6.81971 26.7976 6.20152C26.1796 5.57223 25.4319 5.08518 24.6064 4.77428C23.8194 4.46985 22.9185 4.25947 21.601 4.19925C20.2818 4.13985 19.8619 4.125 16.5 4.125ZM16.5 6.35497C19.8041 6.35497 20.196 6.36735 21.5012 6.42675C22.7073 6.48202 23.3624 6.6825 23.7988 6.85327C24.3763 7.07685 24.7888 7.3458 25.2219 7.7781C25.655 8.21123 25.9232 8.62372 26.1467 9.20122C26.3167 9.63765 26.518 10.2927 26.5732 11.4988C26.6326 12.804 26.645 13.1959 26.645 16.5C26.645 19.8041 26.6326 20.196 26.5732 21.5012C26.518 22.7073 26.3175 23.3624 26.1467 23.7988C25.9487 24.3363 25.6326 24.8226 25.2219 25.2219C24.8227 25.6327 24.3363 25.9488 23.7988 26.1467C23.3624 26.3167 22.7073 26.518 21.5012 26.5732C20.196 26.6326 19.8049 26.645 16.5 26.645C13.1951 26.645 12.804 26.6326 11.4988 26.5732C10.2927 26.518 9.63765 26.3175 9.20122 26.1467C8.6637 25.9487 8.17741 25.6326 7.7781 25.2219C7.3674 24.8226 7.05138 24.3363 6.85327 23.7988C6.68332 23.3624 6.48202 22.7073 6.42675 21.5012C6.36735 20.196 6.35497 19.8041 6.35497 16.5C6.35497 13.1959 6.36735 12.804 6.42675 11.4988C6.48202 10.2927 6.6825 9.63765 6.85327 9.20122C7.07685 8.62372 7.3458 8.21123 7.7781 7.7781C8.17735 7.36729 8.66366 7.05125 9.20122 6.85327C9.63765 6.68332 10.2927 6.48202 11.4988 6.42675C12.804 6.36735 13.1959 6.35497 16.5 6.35497Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4999 20.6292C15.9577 20.6292 15.4207 20.5224 14.9198 20.3149C14.4188 20.1074 13.9636 19.8032 13.5802 19.4198C13.1968 19.0364 12.8926 18.5812 12.6851 18.0802C12.4776 17.5793 12.3708 17.0423 12.3708 16.5001C12.3708 15.9578 12.4776 15.4209 12.6851 14.9199C12.8926 14.419 13.1968 13.9638 13.5802 13.5803C13.9636 13.1969 14.4188 12.8928 14.9198 12.6853C15.4207 12.4778 15.9577 12.371 16.4999 12.371C17.595 12.371 18.6453 12.806 19.4196 13.5803C20.194 14.3547 20.629 15.405 20.629 16.5001C20.629 17.5952 20.194 18.6454 19.4196 19.4198C18.6453 20.1942 17.595 20.6292 16.4999 20.6292ZM16.4999 10.1393C14.8129 10.1393 13.1951 10.8095 12.0022 12.0023C10.8093 13.1952 10.1392 14.8131 10.1392 16.5001C10.1392 18.1871 10.8093 19.8049 12.0022 20.9978C13.1951 22.1907 14.8129 22.8608 16.4999 22.8608C18.1869 22.8608 19.8048 22.1907 20.9976 20.9978C22.1905 19.8049 22.8607 18.1871 22.8607 16.5001C22.8607 14.8131 22.1905 13.1952 20.9976 12.0023C19.8048 10.8095 18.1869 10.1393 16.4999 10.1393ZM24.7111 10.0238C24.7111 10.4226 24.5527 10.805 24.2708 11.087C23.9888 11.369 23.6063 11.5274 23.2076 11.5274C22.8088 11.5274 22.4264 11.369 22.1444 11.087C21.8624 10.805 21.704 10.4226 21.704 10.0238C21.704 9.62506 21.8624 9.24262 22.1444 8.96065C22.4264 8.67867 22.8088 8.52026 23.2076 8.52026C23.6063 8.52026 23.9888 8.67867 24.2708 8.96065C24.5527 9.24262 24.7111 9.62506 24.7111 10.0238Z"
      />
    </svg>
  );
};

export default InstagramSvg;
