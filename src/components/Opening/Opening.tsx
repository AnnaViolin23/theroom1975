import React, { useEffect, useState } from 'react';
import './Opening.scss';

const phrases = [
  "LADIES AND\nGENTLEMEN",
  "WITH GREAT HONOR\nWE PRESENT TO YOU",
  "ROOM\nof\nTHE 1975"
];

const setOpeningHeight = () => {
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isChrome = /Chrome|CriOS/i.test(navigator.userAgent);
  const isSafari = /^((?!Chrome|CriOS|Firefox|Edg|OPR).)*Safari/i.test(navigator.userAgent);
  const openingElement = document.querySelector(".opening") as HTMLElement | null;

  if (openingElement) {
    if (isMobile && isSafari) {
      openingElement.style.setProperty('--opening-height', '90vh');
    } else if (isMobile && isChrome) {
      openingElement.style.setProperty('--opening-height', '85vh');
    } else {
      openingElement.style.setProperty('--opening-height', '100vh');
    }
  }
  
};

export const Opening: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPhraseIndex((prevIndex) =>
        prevIndex < phrases.length - 1 ? prevIndex + 1 : 0
      );
    }, 500);

    setOpeningHeight(); // Устанавливаем высоту компонента при монтировании

    window.addEventListener("resize", setOpeningHeight); // Обновляем высоту при изменении размера окна

    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", setOpeningHeight);
    };
  }, []);

  return (
    <>
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
    </>
  );
};
