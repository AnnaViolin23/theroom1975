import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Main } from './components/Main/Main';
import { Opening } from './components/Opening/Opening';
import { Contacts } from './components/Contacts/Contacts';
import { Discuss } from './components/Discuss/Discuss';

export const Root = () => {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={showMain ? <Main /> : <Opening showMain={showMain} setShowMain={setShowMain}/>} />
            <Route path="/discuss" element={<Discuss />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
};
