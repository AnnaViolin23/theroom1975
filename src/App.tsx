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
    const mediaQueryLand = window.matchMedia("(orientation: landscape)");
    const mediaQueryPort = window.matchMedia("(orientation: portrait)");

    if (
      (mediaQueryLand.matches && window.innerWidth < 1280) ||
      (mediaQueryPort.matches && window.innerWidth >= 1280)
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
    const mediaQuery = window.matchMedia("(orientation: portrait)");

    const orientationChangeHandler = () => {
      setHasRotated(true);
      checkOrientation();
    };

    mediaQuery.addEventListener("change", orientationChangeHandler);

    return () => {
      mediaQuery.removeEventListener("change", orientationChangeHandler);
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
