import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/global.css'; // ✅ 이거 있어야 함!!

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
