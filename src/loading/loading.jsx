import React, { useState, useEffect } from 'react';
import './loading.css'; 

const Loading = () => {
  const [dots, setDots] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const loadingTexts = [
    "Initializing...",
    "Connecting to Alam Code...",
    "Fetching data...",
    "Loading resources...",
    "Almost ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + '.' : ''));
    }, 500);

    const lineInterval = setInterval(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % loadingTexts.length);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(lineInterval);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-text">
          <span className="loading-line">{loadingTexts[currentLine]}{dots}</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
