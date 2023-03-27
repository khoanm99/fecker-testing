import { useState, useRef, useEffect, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import NavigationSvg from '@/atoms/svg/navigation';

interface IProps {
  children: ReactNode;
  icon: string;
  className?: string;
  layout: 'slider' | 'imageLink';
}

interface IMousePos {
  x: number;
  y: number;
}

const HoverArea = ({ children, icon, className, layout }: IProps) => {
  const [isActive, setActive] = useState<Boolean>(false);
  const [touchDevice, setTouchDevice] = useState<boolean>(true);
  const [mousePosition, setMousePosition] = useState<IMousePos>({ x: 0, y: 0 });
  const mouse = useRef(null);

  useEffect(() => {
    if ('ontouchstart' in document.documentElement) {
      setTouchDevice(true);
    } else {
      setTouchDevice(false);
    }

    return () => {
      setTouchDevice(true);
    };
  }, []);

  const mouseMoveHandle = (e: MouseEvent) => {
    if (touchDevice) return;

    const currentTargetRect = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - currentTargetRect.left;
    const y = e.pageY - window.pageYOffset - currentTargetRect.top;
    const w = currentTargetRect.width;

    if (layout === 'slider' && x < w * 0.7) {
      return setActive(false);
    }

    setTimeout(() => {
      setMousePosition({ x, y });
    }, 100);

    setActive(true);
  };

  const mouseOutHandle = () => {
    setActive(false);
  };

  const { x, y } = mousePosition;

  return (
    <div
      onMouseMove={mouseMoveHandle}
      onMouseLeave={mouseOutHandle}
      className={`hover-area overflow-hidden ${className ?? ''}`}
    >
      {children}
      <motion.div
        ref={mouse}
        style={{
          top: `${y - 30}px`,
          left: `${x - 30}px`
        }}
        className={`absolute z-[9]`}
      >
        {!touchDevice && (
          <CursorIcon
            icon={icon}
            className={`rotate-[180deg] ${
              isActive ? 'h-auto w-auto' : 'lg:h-0 lg:w-0'
            }`}
          />
        )}
      </motion.div>
    </div>
  );
};

const CursorIcon = ({
  icon,
  className
}: {
  icon: string;
  className: string;
}) => {
  return (() => {
    switch (icon) {
      case 'arrow-right':
        return (
          <NavigationSvg className={`arrow-right overflow-auto ${className}`} />
        );
      case 'plus':
        return <NavigationSvg className={`plus-icon`} />;
      default:
        return null;
    }
  })();
};

export default HoverArea;
