import { scrollToTarget } from '@/utils/helpers';
import BackToTopSVG from '@/atoms/svg/backToTop';

const BackToTop = ({ active }: { active: Boolean }) => {
  return (
    <span
      className={`group fixed bottom-[140px] right-[55px] hidden cursor-pointer opacity-0 transition-all duration-300 lg:z-[11] lg:block ${
        active ? 'animate-fadeIn-up' : ''
      }`}
      onClick={() => scrollToTarget('header', true)}
      style={{ animationDelay: '300ms' }}
    >
      <BackToTopSVG
        className={
          'transition-all duration-300 group-hover:translate-y-[-20px]'
        }
      />
    </span>
  );
};

export default BackToTop;
