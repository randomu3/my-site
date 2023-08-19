import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage, ForgotPasswordPage } from './components/AuthPage/AuthPages.jsx';
import DashboardPage from './components/DashBoard/DashboardPage';
import BotTestingPage from './components/BotTestingPage/BotTestingPage';
import BotStatisticsPage from './components/BotStatistics/BotStatisticsPage';
import App from './components/AppPage/App';

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/testing" element={<BotTestingPage />} /> {/* Новый маршрут */}
      <Route path="/dashboard/statistics" element={<BotStatisticsPage />} /> {/* Новый маршрут */}
    </Routes>
  </Router>,
  root
);
