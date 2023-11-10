/* eslint-disable react/jsx-pascal-case */
import './Discuss.scss'
import React from 'react';
import Safe from 'react-safe';
import { useNavigate } from 'react-router-dom';

export const Discuss: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className='wraper__disquss'>
      <div className='top-bar-back__dis'>
        <button onClick={goBack} className="top-bar-back__dis--button">BACK</button>
      </div>
      
      <div className="custom-container">
        <p>Hi, guys!
          <br />Feel free to share your thoughts and wishes here. 
          <br />Registering is a breeze, so don't hesitate to sign in and chat with others.
          <br />If you have any additional information regarding the content on the homepage, we would be happy to hear your contributions and suggestions!
          <br />If you encounter any issues on the website, please specify the problem and the device you're using.
          <br />If you are somehow involved in creating music or content for THE 1975, I want to thank you on behalf of all the fans for your awesome work. 
          <br />You rock, guys!
          <br />If you are Truman Black or whatever people calls you - just play it cool.
          <br />To all you lovely folks, enjoy your online adventures, but don't forget, the real world is way more exciting than the virtual one! 
          <br />So, put on those walking shoes and hit the streets!
          <br />All the best,
          <br />team A</p>
      </div>

      <div className="discuss-container">
        <div id="disqus_thread"></div>
        <Safe.script>
          {
            (function () {
              var d = document, s = d.createElement('script');
              s.src = 'https://theroom1975.disqus.com/embed.js';
              s.setAttribute('data-timestamp', new Date().toString());
              (d.head || d.body).appendChild(s);
            })()
          }
        </Safe.script>
      </div>
    </div>
  );
}
