import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AuthGuard from './components/auth/AuthGuard';

// Auth Pages
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

// Admin Pages
import AdminDashboard from './pages/admin/AdminDashboard';

// Trainer Pages
import TrainerDashboard from './pages/trainer/TrainerDashboard';
import ContentUpload from './pages/trainer/ContentUpload';
import AIAssistant from './pages/trainer/AIAssistant';

// Student Pages
import StudentDashboard from './pages/student/StudentDashboard';

// Parent Pages
import ParentDashboard from './pages/parent/ParentDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          
          {/* Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <AuthGuard allowedRoles={['admin']}>
                <AdminDashboard />
              </AuthGuard>
            } 
          />
          
          {/* Trainer Routes */}
          <Route 
            path="/trainer" 
            element={
              <AuthGuard allowedRoles={['trainer']}>
                <TrainerDashboard />
              </AuthGuard>
            } 
          />
          <Route 
            path="/trainer/content" 
            element={
              <AuthGuard allowedRoles={['trainer']}>
                <ContentUpload />
              </AuthGuard>
            } 
          />
          <Route 
            path="/trainer/ai-assistant" 
            element={
              <AuthGuard allowedRoles={['trainer']}>
                <AIAssistant />
              </AuthGuard>
            } 
          />
          
          {/* Student Routes */}
          <Route 
            path="/student" 
            element={
              <AuthGuard allowedRoles={['student']}>
                <StudentDashboard />
              </AuthGuard>
            } 
          />
          
          {/* Parent Routes */}
          <Route 
            path="/parent" 
            element={
              <AuthGuard allowedRoles={['parent']}>
                <ParentDashboard />
              </AuthGuard>
            } 
          />
          
          {/* Fallback Routes */}
          <Route path="/" element={<Navigate to="/login\" replace />} />
          <Route path="*" element={<Navigate to="/login\" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;