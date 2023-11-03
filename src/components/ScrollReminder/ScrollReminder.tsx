import React, { useState, useEffect, useRef } from 'react';
import './ScrollReminder.scss';

export const ScrollReminder = () => {
  const [isMobile, setIsMobile] = useState(true);
  const topbarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setIsMobile(false);
    }
  }, [])

  const closeTopBar = () => {
    if (topbarRef.current) {
      topbarRef.current.classList.toggle('hidden');
    }
  };

  const barText = isMobile ? "SCROLL TO EXPLORE" : "ZOOM IN TO EXPLORE";
  const barIcon = isMobile ? "arrow.png" : "zoom_in.png";

  return (
    <div ref={topbarRef} className="topbar">
      {barText}
      <label id="hideTop" onClick={closeTopBar}>
        <img src={`/${barIcon}`} alt={isMobile ? "arrow" : "zoom-in"} className={isMobile ? "icon-arrow" : "icon-zoom"} />
      </label>
    </div>
  );
};