import './App.scss';
import React, { useEffect, useState } from 'react';
import { Main } from './components/Main/Main';
import { Opening } from './components/Opening/Opening';
import classNames from 'classnames';

export const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showMain, setShowMain] = useState(false);
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
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
  }, []);

  return (
    <div>
      {showOpening && <Opening />}
      {showMain &&
        <Main
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      }
    </div>
  );
};
