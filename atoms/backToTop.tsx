import { scrollToTarget } from '@/utils/helpers';
import BackToTopSVG from '@/atoms/svg/backToTop';

const BackToTop = ({ active }: { active: Boolean }) => {
  return (
    <span
      className={`${active} fixed bottom-[140px] right-[55px] hidden cursor-pointer lg:z-[11] ${
        active ? 'lg:block' : ''
      }`}
      onClick={() => scrollToTarget('header', true)}
    >
      <BackToTopSVG />
    </span>
  );
};

export default BackToTop;
