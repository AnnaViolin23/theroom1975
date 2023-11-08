import './App.scss';
import './styles/fonts.css';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const App = () => {
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isAllowedBrowser = /Chrome|CriOS|Mobile Safari|Safari|Edg|Firefox|OPR/i.test(navigator.userAgent);

    if (isMobile && !isAllowedBrowser) {
      const viewportMeta = document.querySelector('meta[name="viewport"]');
      if (viewportMeta) {
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
      }
    }
  }, []);

  return (
    <div className='section'>
      <Outlet />
    </div>
  );
};
