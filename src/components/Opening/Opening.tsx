import React, { useEffect, useState } from 'react';
import './Opening.scss';
import { Link } from 'react-router-dom';
import { setOpeningHeight } from '../../helpers/setOpeningHeight';

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

  const handleContinue = () => {
    setShowWarning(false);
  };

  useEffect(() => {
    let showMainTimer: NodeJS.Timeout; 

    if (!showWarning) {
      showMainTimer = setTimeout(() => {
        setShowMain(true);
      }, 13500);
    }

    return () => {
      clearTimeout(showMainTimer);
    };
  }, [showMain, setShowMain, showWarning]);

  useEffect(() => {
    const isChromeOrSafari = /Chrome|CriOS|Safari/.test(navigator.userAgent);

    if (isChromeOrSafari) {
      setShowWarning(false);
    } else {
      setOpeningHeight();
    }

    const timer = setInterval(() => {
      setPhraseIndex((prevIndex) =>
        prevIndex < phrases.length - 1 ? prevIndex + 1 : 0
      );
    }, 500);

    window.addEventListener("resize", setOpeningHeight); 

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", setOpeningHeight);
    };
  }, []);

  return (
    <>
      {showWarning && (
        <div className='warning-modal'>
          <p>We kindly suggest using Chrome or Safari as your browser for an enhanced website experience and smoother interaction.</p>
          <Link to='/' onClick={handleContinue}>
            <button>Continue</button>
          </Link>
        </div>
      )}

      {!showWarning && (
        <div className="opening">
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
