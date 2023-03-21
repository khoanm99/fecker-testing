import { SVGProps } from '@/models/common';
import { twMerge } from 'tailwind-merge';

const DownloadSvg = ({ className = '', ...props }: SVGProps) => {
  const defaultCls =
    'transition-all duration-500 fill-black hover:fill-primary cursor-pointer';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="29"
      viewBox="0 0 27 29"
      fill="none"
      {...props}
      className={twMerge(defaultCls, className)}
    >
      <path d="M14.72 26.24L14.72 9.69238L12.9088 9.69238L12.9088 26.24L14.72 26.24Z" />
      <path d="M15.0313 27.4429L9.58838 22L8.30769 23.2807L13.7506 28.7236L15.0313 27.4429Z" />
      <path d="M19.2115 23.2875L17.9308 22.0068L12.4879 27.4498L13.7686 28.7304L19.2115 23.2875Z" />
      <g xmlns="http://www.w3.org/2000/svg" clipPath="url(#clip0_10474_10379)">
        <path d="M21.805 7.09206C20.8926 2.31606 16.4419 -0.781733 11.8698 0.170165C8.52116 0.868958 5.90553 3.5981 5.23581 7.08656C1.99264 7.47723 -0.332943 10.5365 0.0361974 13.9204C0.378971 17.0347 2.91022 19.3842 5.91608 19.3842H9.63913H10.1401H10.9997V17.6235H10.1401H9.63913H5.91608C3.58522 17.607 1.7026 15.6261 1.71842 13.1886C1.73424 10.7566 3.63268 8.79228 5.96882 8.80878C6.40124 8.80878 6.75983 8.47314 6.80729 8.02195C7.23444 4.15383 10.5883 1.38067 14.2956 1.82636C17.4122 2.20052 19.8696 4.77009 20.2335 8.02195C20.302 8.47864 20.6817 8.80878 21.1247 8.80878C23.4555 8.80878 25.3487 10.7841 25.3487 13.2161C25.3487 15.6481 23.4555 17.6235 21.1247 17.6235H17.3647H16.9007H16.0042V19.3842H16.9007H17.3647H21.1247C24.3889 19.3622 27.0204 16.5835 26.9993 13.1776C26.9782 10.0743 24.7581 7.47172 21.805 7.09206Z" />
      </g>
    </svg>
  );
};
export default DownloadSvg;
