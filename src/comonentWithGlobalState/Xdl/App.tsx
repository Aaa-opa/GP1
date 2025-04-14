import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  const getBackgroundClass = () => {
    return isShaking ? 'shake' : '';
  };

  return (
    <div className={`app ${getBackgroundClass()}`}>
      <button className="shake-button" onClick={handleClick}>
        颤抖吧！
      </button>
    </div>
  );
};

export default App;