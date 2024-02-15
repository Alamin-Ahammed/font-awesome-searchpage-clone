import { useEffect, useRef, useState } from 'react';

export const useIsOutsideClicked = (elementRef, callback, clickedoutsideCallback=()=>{}) => {
  useEffect(() => {
    const handleClick = (event) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        callback(false);
      }else{
        clickedoutsideCallback(true)
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [elementRef, callback]);
};
