import React, { createContext, useEffect, useState } from 'react';
import { IMouseState } from '@/types';
import useMouse from '@react-hook/mouse-position';
import { motion, Variants } from 'framer-motion';
import NavigationSvg from '@/atoms/svg/navigation';
import PlusCircleSvg from '@/atoms/svg/plusCircle';

const mouseState: IMouseState = {
  cursorVariant: 'default',
  cursorActive: false
};

const MouseContext = createContext<any | undefined>(undefined);

export const MouseProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState({ ...mouseState });

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
      x: mouseRef.current.x ? mouseRef.current.x - 30 : 0,
      y: mouseRef.current.y ? mouseRef.current.y - 30 : 0
    }
  };

  const spring = {
    type: 'spring',
    mass: 0.6
  };

  return (
    <MouseContext.Provider value={{ ...state, updateState: updateState }}>
      <div className="relative m-0 p-0" ref={ref}>
        {children}

        <motion.div
          variants={variants}
          className={`mouse-circle ${
            state.cursorActive ? 'h-[0] w-[0] overflow-hidden' : ''
          } bg-red fixed top-0 left-0`}
          animate={state.cursorVariant}
          transition={spring}
          style={{
            zIndex: 5
          }}
        >
          {state.cursorActive && (
            <CursorIcon icon={'arrow-right'} className={`h-auto w-auto`} />
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

export default MouseContext;
