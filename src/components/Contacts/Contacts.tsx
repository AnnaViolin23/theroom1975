import './Contacts.scss';

import React from 'react'

export const Contacts: React.FC = () => {
  return (
    <div className="contacts-container">
      <h1>Contacts</h1>
      <div className="contacts-text">
        Is there anything that needs <br />fixing or improving?
        <br /> If so, feel free to contact me!
      </div>
      <div className="contacts-links">
        <a href="https://www.instagram.com/anna.violin/" target="_blank" rel="noopener noreferrer">
          <img src="/insta.png" alt="insta" className='icons' />
        </a>
        <a href="mailto:annpastushenko23@gmail.com">
          <img src='/mail3.png' alt='mail' className='icons' />
        </a>
      </div>
    </div>
  );
}