import React, { useEffect, useState } from 'react';
import './Opening.scss'

const phrases = [
  "LADIES AND\nGENTEMEN",
  "WITH GREAT HONOR\nWE PRESENT TO YOU",
  "ROOM\nof\nTHE 1975"
];

export const Opening: React.FC = () => {
  const [phraseIndex, setPhraseIndex] = useState<number>(0);

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
}