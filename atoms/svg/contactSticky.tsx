import { SVGProps } from '@/types';
import { twMerge } from 'tailwind-merge';

const ContactStickySvg = ({ className = '', ...props }: SVGProps) => {
  const defaultCls =
    'w-[70px] h-[70px] cursor-pointer fill-primary transition-all duration-500 hover:fill-black';
  return (
    <svg
      viewBox="0 0 70 70"
      fill="none"
      {...props}
      className={twMerge(defaultCls, className)}
    >
      <circle cx="35" cy="35" r="35" />
      <g>
        <path
          d="M54.0019 25.6894C52.5151 26.8796 51.1345 27.9842 49.754 29.0887C46.8198 31.4377 43.8869 33.7891 40.9515 36.1356C39.2657 37.4832 37.8061 37.4769 36.1326 36.1331C33.0798 33.6846 30.0258 31.2374 26.9668 28.7953C26.711 28.5912 26.4193 28.4351 26.025 28.1794C25.6505 28.4074 24.9473 28.7424 24.3552 29.2197C23.5407 29.8747 23.5642 30.8407 23.7175 31.779C23.7743 32.1254 23.9202 32.4742 24.0932 32.7828C25.5195 35.3156 26.9631 37.8384 28.3993 40.3662C28.8022 41.0765 29.3967 41.5514 30.1321 41.8562C30.7871 42.1269 31.4174 42.1055 32.0329 41.7164C32.5298 41.4015 33.044 41.1143 33.5519 40.8183C35.1018 39.9128 36.7246 40.0286 38.1188 41.1723C38.4895 41.4758 38.8566 41.8045 39.1483 42.1836C40.6191 44.0917 41.9799 46.0729 42.6596 48.437C42.8042 48.9395 42.8524 49.4899 42.8401 50.0151C42.8203 50.8741 42.405 51.5252 41.6647 51.9686C36.6208 54.9926 31.7326 54.548 27.0014 51.2494C24.9522 49.8212 23.2676 47.9873 21.9872 45.8324C19.9923 42.4758 18.0297 39.0941 16.1955 35.6456C14.5764 32.5977 13.7619 29.2915 14.061 25.7964C14.4306 21.4865 16.3883 18.1199 20.0171 15.8087C20.1864 15.7004 20.3705 15.6148 20.5362 15.5001C21.8215 14.6021 23.0093 15.0392 23.9202 15.8352C24.9052 16.6967 25.6369 17.766 26.2487 18.9184C26.7245 19.8151 27.1522 20.7383 27.6231 21.6376C27.6911 21.7674 27.8789 21.8517 28.0285 21.9109C28.136 21.9538 28.272 21.9197 28.3956 21.9197C36.4922 21.9197 44.5889 21.9197 52.6856 21.9235C53.0688 21.9235 53.4631 21.9298 53.8326 22.0167C55.2193 22.3429 55.9832 23.343 55.9832 24.7876C55.9844 30.8545 55.9572 36.9228 56.0005 42.9897C56.0128 44.7366 54.6965 45.8651 53.2764 45.884C50.1618 45.9268 43.5174 45.9054 40.4028 45.8966C39.8095 45.8953 39.3955 45.4495 39.3943 44.8903C39.393 44.3411 39.77 43.9368 40.3546 43.8865C40.6302 43.8625 40.9095 43.8739 41.1864 43.8739C43.8387 43.8739 50.0197 43.8739 52.6721 43.8739C52.8414 43.8739 53.0119 43.8764 53.18 43.8625C53.7881 43.8121 53.9982 43.5842 53.9995 42.9632C54.0032 42.0199 53.9995 41.0765 53.9995 40.1344C53.9995 35.5285 53.9995 30.9226 53.9995 26.3179V25.6906L54.0019 25.6894ZM34.663 51.9661C36.5775 51.9459 38.1979 51.597 39.6921 50.7834C41.09 50.0227 41.1345 49.8615 40.5425 48.3413C39.9059 46.709 38.9641 45.253 37.9272 43.8638C37.6133 43.4431 37.2326 43.059 36.8309 42.7239C36.0362 42.0615 35.4726 42.0388 34.5864 42.5527C34.0105 42.8864 33.4555 43.263 32.8561 43.5464C32.3889 43.7668 31.8772 43.9834 31.3742 44.0124C29.3448 44.127 27.7763 43.2315 26.7419 41.4796C25.2253 38.9102 23.7756 36.3006 22.306 33.7022C22.1305 33.3924 21.9835 33.0574 21.8747 32.7161C21.3062 30.9175 21.6188 28.1832 23.9919 27.0307C24.5048 26.7814 24.9769 26.4463 25.475 26.1655C26.1572 25.7826 26.4007 25.1793 26.308 24.4261C26.2561 24.008 26.1906 23.5798 26.0472 23.1868C25.391 21.3996 24.5307 19.7169 23.3875 18.2005C23.0921 17.8088 22.7028 17.4813 22.3196 17.1702C22.1997 17.0732 21.9266 17.0531 21.7845 17.1236C21.316 17.3579 20.8451 17.6085 20.4274 17.9247C17.5674 20.091 16.0855 23.0016 16.0039 26.629C15.9335 29.7563 16.8011 32.6556 18.2805 35.3559C19.9095 38.3296 21.6102 41.2642 23.3121 44.1963C24.2193 45.7593 25.3514 47.151 26.6739 48.3727C29.0061 50.529 31.6609 51.927 34.663 51.9661ZM52.9341 23.9639H28.2905C28.3857 25.0005 28.2126 25.9514 27.6466 26.794C27.8752 26.9665 28.0767 27.1101 28.2695 27.265C31.2753 29.6694 34.2799 32.075 37.2845 34.4806C38.3116 35.3031 38.7825 35.2993 39.8182 34.4705C42.9921 31.9289 46.1673 29.3872 49.3412 26.8456C50.5128 25.9073 51.6833 24.969 52.9353 23.9639H52.9341Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
export default ContactStickySvg;
