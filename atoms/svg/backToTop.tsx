import { SVGProps } from '@/models/common';

const BackToTop = ({
  pathCls = 'stroke-primary',
  className = '',
  ...props
}: SVGProps) => {
  return (
    <svg
      width="22"
      height="59"
      viewBox="0 0 22 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0156 59L11.0156 2"
        stroke="#39C66B"
        strokeWidth="2"
        strokeMiterlimit="10"
        className={pathCls}
      />
      <path
        d="M1 12.1658L11.1797 2.01116L21.2198 12.1826"
        stroke="#39C66B"
        strokeWidth="2"
        strokeMiterlimit="10"
        className={pathCls}
      />
    </svg>
  );
};
export default BackToTop;
