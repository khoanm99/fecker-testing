import { SVGProps } from '@/types';

const Plus = ({ color = '#39c66b', className = '', ...props }: SVGProps) => {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props} className={className}>
      <line y1="15.5" x2="32" y2="15.5" stroke={color} />
      <line x1="16.5" y1="2.18557e-08" x2="16.5" y2="32" stroke={color} />
    </svg>
  );
};
export default Plus;
