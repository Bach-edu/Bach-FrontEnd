import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import LoginPage from '../Components/Login';
import Dashboard from '../Components/Dasboard';
import ProfilePage from '../Components/Profile';
import DiscoverPage from '../Components/Discover';
import ChallengesPage from '../Components/Challenges';
import MessagesPage from '../Components/Messages';
// import ProgressPage from '../Components/Progress'; // TODO: Crear componente
import Header from '../Components/Header';
import LoadingSpinner from '../Components/LoadingSpinner';
import ProtectedRoute from '../Components/ProtectedRoute';

const RoutesComponent = () => {
  const { isAuthenticated, isLoading, initialize } = useAuthStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {isAuthenticated ? (
          <>
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/discover"
                  element={
                    <ProtectedRoute>
                      <DiscoverPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/challenges"
                  element={
                    <ProtectedRoute>
                      <ChallengesPage />
                    </ProtectedRoute>
                  }
                />                <Route
                  path="/messages"
                  element={
                    <ProtectedRoute>
                      <MessagesPage />
                    </ProtectedRoute>
                  }
                />
                {/* TODO: Crear componente ProgressPage */}
                {/*
                <Route
                  path="/progress"
                  element={
                    <ProtectedRoute>
                      <ProgressPage />
                    </ProtectedRoute>
                  }
                />
                */}
                <Route path="/login" element={<Navigate to="/dashboard" replace />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </main>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default RoutesComponent;
