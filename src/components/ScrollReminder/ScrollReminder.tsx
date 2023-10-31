import React, { useState, useEffect, useRef } from 'react';
import './ScrollReminder.scss';

export const ScrollReminder = () => {
  const [showReminder, setShowReminder] = useState(false);
  const topbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setShowReminder(true);
      } else {
        setShowReminder(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeTopBar = () => {
    if (topbarRef.current) {
      topbarRef.current.classList.toggle('hidden');

    }
  };

  return (
    <>
      {showReminder && (
        <div ref={topbarRef} className="topbar">
          SCROLL TO EXPLORE
          <label id="hideTop" onClick={closeTopBar}>
            <img src="/arrow.png" alt="arrow" className="arrow" />
          </label>
        </div>
      )}
    </>
  );
};
