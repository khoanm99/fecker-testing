import { twMerge } from 'tailwind-merge';
import Loading from '@/atoms/loading';

interface Props {
  title: string;
  type?: 'button' | 'submit';
  className?: string;
  loading?: boolean;
}

const PrimaryButton = ({
  title,
  type = 'button',
  className,
  loading = false
}: Props) => {
  const clsFont = 'text-white text-[16px] font-semibold lg:text-[20px]';
  const clsDefault =
    'relative group hover:bg-black rounded-full bg-primary py-[8px] pl-5 pr-11 lg:pl-10 lg:pr-20 max-w-[330px] lg:max-w-[100%] inline-block transition-all duration-300';
  return (
    <button
      className={twMerge(
        clsDefault,
        clsFont,
        className,
        loading ? 'bg-black text-white' : ``
      )}
      title={title}
      type={type}
      disabled={loading}
    >
      {title}
      {loading ? (
        <Loading
          className={
            'absolute top-[calc(50%-10px)] right-3 h-[18px] w-[18px] lg:right-[45px] '
          }
        />
      ) : (
        RenderArrow()
      )}
    </button>
  );
};

const RenderArrow = () => {
  const clsDefault = `absolute top-[calc(50%_+_1px)] -translate-y-1/2 right-5 lg:right-[45px] h-[18px] w-[18px] group-hover:right-3 lg:group-hover:right-[25px] transition-right duration-300 `;
  return (
    <span className={twMerge(clsDefault)}>
      <svg viewBox="0 0 20 18" fill="none">
        <path
          d="M18.2499 8.18692L9.47496 0.573913C9.39996 0.5 9.32496 0.5 9.24996 0.5C9.17496 0.5 9.02496 0.573913 8.94996 0.647825C8.87496 0.721738 8.87496 0.869563 8.87496 0.943476C8.87496 1.01739 8.94996 1.0913 9.02496 1.16521L17.6499 8.63039L1.375 8.63039C1.15 8.63039 1 8.77822 1 8.99996C1 9.22169 1.15 9.36952 1.375 9.36952L17.6499 9.36952L8.94996 16.8347C8.79996 16.9825 8.79996 17.2043 8.94996 17.3521C9.02496 17.426 9.17496 17.4999 9.24996 17.4999C9.32496 17.4999 9.39996 17.4999 9.47496 17.426L18.2499 9.813C18.2499 9.813 18.6249 9.51734 18.6249 8.99996C18.6249 8.48257 18.2499 8.18692 18.2499 8.18692Z"
          fill="white"
          stroke="white"
        />
      </svg>
    </span>
  );
};

export default PrimaryButton;
