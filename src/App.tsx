import './App.scss';
import './styles/fonts.css';
import React from 'react-dom'
import { Outlet } from 'react-router-dom';

export const App = () => {

  return (
      <div className='section'>
        <Outlet />
      </div>
  );
};
