import { useState, useRef, useEffect, ReactNode, MouseEvent } from 'react';
import NavigationSvg from '@/atoms/svg/navigation';

interface IProps {
  children: ReactNode;
  icon: string;
}

interface IMousePos {
  x: number;
  y: number;
}

const HoverArea = ({ children, icon }: IProps) => {
  const [isActive, setActive] = useState<boolean>(false);
  const [touchDevice, setTouchDevice] = useState<boolean>(true);
  const [mousePosition, setMousePosition] = useState<IMousePos>({ x: 0, y: 0 });
  const [iconCls, setIconCls] = useState<string>('');
  const mouse = useRef(null);

  useEffect(() => {
    if ('ontouchstart' in document.documentElement) {
      setTouchDevice(true);
      setActive(true);
    } else {
      setTouchDevice(false);
    }

    return () => {
      setTouchDevice(true);
      setActive(false);
    };
  }, []);

  const mouseMoveHandle = (e: MouseEvent) => {
    if (touchDevice) return;

    const currentTargetRect = e.currentTarget.getBoundingClientRect();
    const x = e.pageX - currentTargetRect.left;
    const y = e.pageY - window.pageYOffset - currentTargetRect.top;

    setTimeout(() => {
      setMousePosition({ x, y });
    }, 100);

    setActive(true);
  };

  const mouseOutHandle = () => {
    setActive(false);
  };

  const { x, y } = mousePosition;

  switch (icon) {
    case 'arrow-right':
      setIconCls('arrow-right');
      break;
    case 'arrow-left':
      setIconCls('arrow-left');
  }

  return (
    <div
      onMouseMove={mouseMoveHandle}
      onMouseLeave={mouseOutHandle}
      className="hover-area"
    >
      {children}
      <div
        ref={mouse}
        style={{
          top: `${y}px`,
          left: `${x}px`
        }}
        className={`custom-cursor ${iconCls}`}
      >
        <CursorIcon icon={icon} />
      </div>
    </div>
  );
};

const CursorIcon = ({ icon }: { icon: string }) => {
  return (() => {
    switch (icon) {
      case 'arrow-right':
        return <NavigationSvg className={`arrow-right`} />;
      case 'arrow-left':
        return <NavigationSvg className={`arrow-left`} />;
      case 'plus':
        return <NavigationSvg className={`plus-icon`} />;
      default:
        return null;
    }
  })();
};

export default HoverArea;
