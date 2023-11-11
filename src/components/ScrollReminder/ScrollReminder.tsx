import React, { useState, useEffect, useRef } from 'react';
import './ScrollReminder.scss';

type Props = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
}

export const ScrollReminder: React.FC<Props> = ({ isActive, setIsActive }) => {
  const [isMobile, setIsMobile] = useState(true);

  const topbarRef = useRef<HTMLDivElement | null>(null);
  const barText = isMobile ? "SCROLL TO EXPLORE" : "ZOOM IN TO EXPLORE";
  const barIcon = isMobile ? "arrow.png" : "zoom_in.png";
  const sessionStorageKey = 'mainComponentOpened';
  // const isInitialLoadKey = 'isInitialLoad';

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      setIsMobile(false);
    }

    
  }, [])

  const closeTopBar = () => {
    // const hasComponentBeenOpened = sessionStorage.getItem(sessionStorageKey);

    // if (!hasComponentBeenOpened) {
      sessionStorage.setItem(sessionStorageKey, 'false');
    //   sessionStorage.setItem(isInitialLoadKey, 'true');
    // }

    if (topbarRef.current) {
      topbarRef.current.classList.toggle('hidden');
    }

    setTimeout(() => {
      setIsActive(false);
    }, 2000)
  };

  return (
    <div ref={topbarRef} className="topbar">
      <img
        src='/cross.png'
        alt='close'
        className='close-button'
        onClick={closeTopBar}
      />
      {barText}
      <label id="hideTop" onClick={closeTopBar}>
        <img src={`/${barIcon}`} alt={isMobile ? "arrow" : "zoom-in"} className={isMobile ? "icon-arrow" : "icon-zoom"} />
      </label>
    </div>
  );
};