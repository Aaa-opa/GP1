import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const handleClick = () => {
    console.log('按钮被点击了!');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
      <button
        onClick={handleClick}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          ':hover': {
            backgroundColor: '#0056b3'
          }
        }}
      >
        点我试试
      </button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
