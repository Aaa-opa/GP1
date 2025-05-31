// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import './main.css'; // 导入 Tailwind 配置

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);