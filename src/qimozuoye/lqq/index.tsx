import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './page';
import LoginPage from './LoginPage';

// 模拟用户登录状态
const isAuthenticated = () => {
  // 这里可以根据实际情况修改，例如从 localStorage 中获取登录状态
  return localStorage.getItem('isLoggedIn') === 'true';
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (isAuthenticated()) {
    return children;
  }
  return <Navigate to="/login" />;
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
);