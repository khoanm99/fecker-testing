import React, { createContext, useEffect, useState } from 'react';
import { IMouseState } from '@/types';
import useMouse from '@react-hook/mouse-position';
import { motion, Variants } from 'framer-motion';
import NavigationSvg from '@/atoms/svg/navigation';
import PlusCircleSvg from '@/atoms/svg/plusCircle';
import { useRouter } from 'next/router';

const mouseState: IMouseState = {
  cursorVariant: 'default',
  cursorActive: false
};

const MouseContext = createContext<any | undefined>(undefined);

export const MouseProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({ ...mouseState });
  const [touchDevice, setTouchDevice] = useState<boolean>(true);
  const router = useRouter();

  const mouseRef = React.useRef<{ x: null | number; y: null | number }>({
    x: null,
    y: null
  });

  const updateState = (newState: any) => {
    setState((prevState: any) => ({
      ...prevState,
      ...newState
    }));
  };

  useEffect(() => {
    'ontouchstart' in document.documentElement
      ? setTouchDevice(true)
      : setTouchDevice(false);

    return () => {
      setTouchDevice(true);
    };
  }, []);

  useEffect(() => {
    updateState({
      cursorVariant: 'default',
      cursorActive: false
    });
  }, [router]);

  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100
  });

  if (mouse.x !== null) {
    mouseRef.current.x = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseRef.current.y = mouse.clientY;
  }

  const variants: Variants = {
    default: {
      opacity: 0,
      height: 0,
      width: 0,
      x: mouseRef.current.x ? mouseRef.current.x : 0,
      y: mouseRef.current.y ? mouseRef.current.y : 0
    },
    slider: {
      opacity: 1,
      height: 65,
      width: 65,
      zIndex: 5,
      x: mouseRef.current.x ? mouseRef.current.x - 30 : 0,
      y: mouseRef.current.y ? mouseRef.current.y - 30 : 0
    },
    projectCard: {
      opacity: 1,
      height: 101,
      width: 101,
      zIndex: 30,
      x: mouseRef.current.x ? mouseRef.current.x - 50 : 0,
      y: mouseRef.current.y ? mouseRef.current.y - 50 : 0
    }
  };

  const spring = {
    type: 'spring',
    stiffness: 250,
    damping: 28
  };

  return (
    <MouseContext.Provider value={{ ...state, updateState: updateState }}>
      <div className="relative m-0 p-0" ref={ref}>
        {children}
        <motion.div
          variants={variants}
          className={`mouse-circle pointer-events-none hidden lg:block ${
            state.cursorActive ? 'h-[0] w-[0]' : ''
          } bg-red fixed top-0 left-0`}
          animate={state.cursorVariant}
          transition={spring}
          style={{
            pointerEvents: 'none'
          }}
        >
          {state.cursorActive && !touchDevice && (
            <CursorIcon
              icon={state.cursorVariant}
              className={`h-auto w-auto`}
            />
          )}
        </motion.div>
      </div>
    </MouseContext.Provider>
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
      case 'slider':
        return (
          <NavigationSvg
            className={`arrow-right rotate-[180deg] overflow-auto ${className}`}
          />
        );
      case 'projectCard':
        return <PlusCircleSvg className={`${className}`} />;
      default:
        return null;
    }
  })();
};

export default MouseContext;
