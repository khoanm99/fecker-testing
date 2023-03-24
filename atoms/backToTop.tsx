import { scrollToTarget } from '@/utils/helpers';
import BackToTopSVG from '@/atoms/svg/backToTop';

const BackToTop = ({ active }: { active: Boolean }) => {
  return (
    <span
      className={`fixed bottom-[140px] right-[55px] hidden cursor-pointer transition-all duration-300 lg:z-[11] lg:block ${
        active ? 'visible opacity-100 ' : 'invisible opacity-0'
      }`}
      onClick={() => scrollToTarget('header', true)}
    >
      <BackToTopSVG />
    </span>
  );
};

export default BackToTop;
