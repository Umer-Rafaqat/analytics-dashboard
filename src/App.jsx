import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import AnalyticsPage from './pages/AnalyticsPage.jsx';
import PlaceholderPage from './pages/PlaceholderPage.jsx';
import ProfileOverviewPage from './pages/ProfileOverviewPage.jsx';
import TeamsPage from './pages/TeamsPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Standalone auth pages */}
      <Route path="/login" element={<LoginPage  />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Sidebar + content shell */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />

        <Route path="/pages/profile/overview" element={<ProfileOverviewPage />} />
        <Route path="/pages/teams" element={<TeamsPage />} />
        <Route path="/pages/pricing" element={<PlaceholderPage />} />
        <Route path="/pages/coming-soon" element={<PlaceholderPage />} />
        <Route path="/pages/404" element={<PlaceholderPage />} />

        <Route path="/applications/chat" element={<PlaceholderPage />} />
        <Route path="/applications/calendar" element={<PlaceholderPage />} />
        <Route path="/applications/kanban" element={<PlaceholderPage />} />

        <Route path="/ecommerce/products" element={<PlaceholderPage />} />
        <Route path="/ecommerce/orders" element={<PlaceholderPage />} />
        <Route path="/ecommerce/customers" element={<PlaceholderPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
