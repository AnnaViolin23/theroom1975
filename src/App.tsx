import './App.scss';
import { useEffect, useState } from 'react';
import { Main } from './components/Main/Main';
import { Opening } from './components/Opening/Opening';

export const App: React.FC = () => {
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
      {showMain && <Main />}
    </div>
  );
};
