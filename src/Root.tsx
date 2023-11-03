import React, { useEffect, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Main } from './components/Main/Main';
import { Opening } from './components/Opening/Opening';
import { Contacts } from './components/Contacts/Contacts';
import { Discuss } from './components/Discuss/Discuss';

export const Root = () => {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const showMainTimer = setTimeout(() => {
      setShowMain(true);
    }, 13500);

    return () => {
      clearTimeout(showMainTimer);
    };
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={showMain ? <Main /> : <Opening />} />
          <Route path="/discuss" element={<Discuss />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
