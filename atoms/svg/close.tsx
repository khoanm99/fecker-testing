import { SVGProps } from '@/types';

const Close = ({ color = '#000', className = '', ...props }: SVGProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="1.29289"
        y1="27.2929"
        x2="27.2929"
        y2="1.29289"
        stroke={`${color}`}
        strokeWidth="2"
      />
      <line
        x1="1.70711"
        y1="1.29289"
        x2="27.7071"
        y2="27.2929"
        stroke={`${color}`}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Close;
