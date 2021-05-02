import { useState, useEffect, useLayoutEffect } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  // Prevent browser from painting without the 'width' state being
  // set properly
  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return width;
};

export default useViewport;
