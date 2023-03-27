import { useState, useRef, useEffect, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import NavigationSvg from '@/atoms/svg/navigation';
import PlusCircleSvg from '@/atoms/svg/plusCircle';

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
    const maxX = currentTargetRect.left + currentTargetRect.width;
    const maxY = currentTargetRect.top + currentTargetRect.height;
    const minX = currentTargetRect.left;
    const minY = currentTargetRect.top;

    if (layout === 'slider' && x < w * 0.7) {
      return setActive(false);
    }

    if (layout === 'imageLink' && x < w * 0.7) {
      if (e.pageX > maxX - 50 || e.pageX < minX + 50) {
        setActive(false);
        return;
      }

      if (
        e.pageY - window.pageYOffset > maxY - 50 ||
        e.pageY - window.pageYOffset < minY + 50
      ) {
        setActive(false);
        return;
      }
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

  const calcX = (layout: string) => {
    switch (layout) {
      case 'imageLink':
        return x - 50;
      case 'slider':
        return x - 30;
    }
  };

  const calcY = (layout: string) => {
    switch (layout) {
      case 'imageLink':
        return y - 50;
      case 'slider':
        return y - 30;
    }
  };

  return (
    <div
      onMouseMove={mouseMoveHandle}
      onMouseLeave={mouseOutHandle}
      className={`hover-area overflow-hidden ${className ?? ''}`}
    >
      {children}
      <div
        ref={mouse}
        style={{
          top: `${calcY(layout)}px`,
          left: `${calcX(layout)}px`
        }}
        className={`absolute z-[10]`}
      >
        {!touchDevice && (
          <CursorIcon
            icon={icon}
            className={`${isActive ? 'h-auto w-auto' : ' lg:h-0 lg:w-0'}`}
          />
        )}
      </div>
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
          <NavigationSvg
            className={`arrow-right rotate-[180deg] overflow-auto ${className}`}
          />
        );
      case 'plus':
        return <PlusCircleSvg className={`${className}`} />;
      default:
        return null;
    }
  })();
};

export default HoverArea;
