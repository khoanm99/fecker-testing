import React, { createContext, useState } from 'react';
import { IMouseState } from '../types';
import useMouse from '@react-hook/mouse-position';
import { motion, Variants } from 'framer-motion';

const mouseState: IMouseState = {
  cursorVariant: 'default',
  cursorText: ''
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
      opacity: mouse.x === null ? 0 : 0.5,
      height: 30,
      width: 30,
      fontSize: '16px',
      backgroundColor: '#fff',
      x: mouseRef.current.x ? mouseRef.current.x : 0,
      y: mouseRef.current.y ? mouseRef.current.y : 0,
      transition: {
        type: 'spring',
        mass: 0.6
      }
    },
    project: {
      opacity: 1,
      backgroundColor: '#d90041',
      color: '#fff',
      height: 125,
      width: 125,
      fontSize: '18px',
      x: mouseRef.current.x ? mouseRef.current.x - 32 : 0,
      y: mouseRef.current.y ? mouseRef.current.y - 32 : 0
    },
    contact: {
      opacity: 0.8,
      backgroundColor: '#d90041',
      color: '#fff',
      height: 120,
      width: 120,
      fontSize: '32px',
      x: mouseRef.current.x ? mouseRef.current.x - 48 : 0,
      y: mouseRef.current.y ? mouseRef.current.y - 48 : 0
    },
    vietnam: {
      opacity: 0.8,
      backgroundColor: '#d90041',
      backgroundImage: "url('https://flagcdn.com/w160/vn.webp')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      color: '#fff',
      height: 120,
      width: 120,
      fontSize: '80px',
      x: mouseRef.current.x ? mouseRef.current.x - 48 : 0,
      y: mouseRef.current.y ? mouseRef.current.y - 48 : 0
    },
    switzerland: {
      opacity: 0.8,
      backgroundColor: '#d90041',
      backgroundImage: "url('https://flagcdn.com/w160/ch.webp')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      color: '#fff',
      height: 120,
      width: 120,
      fontSize: '80px',
      x: mouseRef.current.x ? mouseRef.current.x - 48 : 0,
      y: mouseRef.current.y ? mouseRef.current.y - 48 : 0
    },
    service: {
      opacity: 0.2,
      backgroundColor: '#fff',
      color: '#000',
      height: 240,
      width: 240,
      fontSize: '10px',
      x: mouseRef.current.x ? mouseRef.current.x - 180 : 0,
      y: mouseRef.current.y ? mouseRef.current.y - 180 : 0
    }
  };

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28
  };

  return (
    <MouseContext.Provider value={{ ...state, updateState: updateState }}>
      <div className="relative m-0 p-0" ref={ref}>
        {children}

        <motion.div
          variants={variants}
          className="mouse-circle"
          animate={state.cursorVariant}
          transition={spring}
        >
          <span className="cursorText">{state.cursorText}</span>
        </motion.div>
      </div>
    </MouseContext.Provider>
  );
};

export default MouseContext;
