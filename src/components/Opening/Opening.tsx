import React, { useEffect, useState } from 'react';
import './Opening.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const phrases = [
  "LADIES AND\nGENTLEMEN",
  "WITH GREAT HONOR\nWE PRESENT TO YOU",
  "ROOM\nof\nTHE 1975"
];

type Props = {
  showMain: boolean;
  setShowMain: (value: boolean) => void;
}

export const Opening: React.FC<Props> = ({ showMain, setShowMain }) => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0);
  const [showWarning, setShowWarning] = useState(true);
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isChrome = /Chrome|CriOS/i.test(navigator.userAgent);
  const isSafari = /^((?!Chrome|CriOS|Firefox|Edg|OPR).)*Safari/i.test(navigator.userAgent);

  const handleContinue = () => {
    setShowWarning(false);
  };

  useEffect(() => {
    const isChromeOrSafari = /Chrome|CriOS|Safari/.test(navigator.userAgent);
    let showMainTimer: NodeJS.Timeout;

    if (isChromeOrSafari) {
      setShowWarning(false);
    }

    if (!showWarning) {
      showMainTimer = setTimeout(() => {
        setShowMain(true);
      }, 13500);
    }

    return () => {
      clearTimeout(showMainTimer);
    };
  }, [setShowMain, showWarning]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prevIndex) =>
        prevIndex < phrases.length - 1 ? prevIndex + 1 : 0
      );
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {showWarning && (
        <div className='warning-modal'>
          <p>we kindly suggest using chrome or safari as your browser for an enhanced website experience and smoother interaction</p>
          <Link to='/' onClick={handleContinue}>
            <button>CONTINUE</button>
          </Link>
        </div>
      )}

      {!showWarning && (
        <div className={classNames('opening', {
          'mobile-safari': isMobile && isSafari,
          'mobile-chrome': isMobile && isChrome,
        })}
        >
          {phrases.map((phrase, index) => (
            <h1
              key={index}
              className={`animated-phrase ${phraseIndex === index ? "active" : ""} ${index === phrases.length - 1 ? "last-phrase" : ""
                }`}
              style={{ animationDelay: `${index * 4.5}s` }}
            >
              {phrase}
            </h1>
          ))}
        </div>
      )}
    </>
  );
};
