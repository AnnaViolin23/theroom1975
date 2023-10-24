import './App.scss';
import { useEffect, useState } from 'react';
import { Main } from './components/Main/Main';
import { Opening } from './components/Opening/Opening';
import PleaseRotate from './animation/rotate/pleaseRotate';

export const App: React.FC = () => {
  const [hasRotated, setHasRotated] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [showOpening, setShowOpening] = useState(true);

  const checkOrientation = () => {
    if (
      (window.screen.orientation.type.includes('landscape') &&
        window.innerWidth < 1280) ||
      (window.screen.orientation.type.includes('portrait') &&
        window.innerWidth >= 1280)
    ) {
      const showMainTimer = setTimeout(() => {
        setShowMain(true);
      }, 13000);
      const hideOpeningTimer = setTimeout(() => {
        setShowOpening(false);
      }, 14500);
      return () => {
        clearTimeout(showMainTimer);
        clearTimeout(hideOpeningTimer);
      };
    } else {
      PleaseRotate.start({
        forcePortrait: false,
      });
    }
  };

  useEffect(() => {
    checkOrientation();
    window.addEventListener('orientationchange', () => {
      setHasRotated(true);
      checkOrientation();
    });

    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  useEffect(() => {
    if (hasRotated) {
      window.location.reload();
    }
  }, [hasRotated]);

  return (
    <div>
      {showOpening && <Opening />}
      {showMain && <Main />}
    </div>
  );
};
