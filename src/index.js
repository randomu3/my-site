import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/DashBoard/DashboardPage";
import App from "./components/AppPage/App";
import StatisticsPage from "./components/StatisticsPage/StatisticsPage.jsx";
import TestingPage from "./components/TestingPage/TestingPage.jsx";
import UserProfile from "./components/UserProfile/UserProfile.jsx";
import UserActivityPage from "./components/DashBoard/components/UserActivityPage/UserActivityPage.jsx";
import RegisterPage from "./components/AuthPages/components/RegisterPage/RegisterPage";
import ForgotPasswordPage from "./components/AuthPages/components/ForgotPasswordPage/ForgotPasswordPage";
import LoginPage from "./components/AuthPages/components/LoginPage/LoginPage";
import NotificationPage from "./components/NotificationPage/NotificationPage";

const root = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/dashboard/testing" element={<TestingPage />} />
      <Route path="/dashboard/statistics" element={<StatisticsPage />} />
      <Route path="/dashboard/profile" element={<UserProfile />} />
      <Route path="/dashboard/user-activity" element={<UserActivityPage />} />
      <Route path="/notifications" element={<NotificationPage/>} />
    </Routes>
  </Router>,
  root
);
