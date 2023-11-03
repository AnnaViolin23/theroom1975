import React from 'react';
import Safe from 'react-safe';
import './Discuss.scss'

export const Discuss: React.FC = () => {
  return (
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
  );
}