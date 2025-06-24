import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import HomePage from '../Components/Home';
import LoginPage from '../Components/Login';
import Dashboard from '../Components/Dasboard';
import ProfilePage from '../Components/Profile';
import DiscoverPage from '../Components/Discover';
import ChallengesPage from '../Components/Challenges';
import MessagesPage from '../Components/Messages';
import ProgressPage from '../Components/Progress';
import Header from '../Components/Header';
import LoadingSpinner from '../Components/LoadingSpinner';
import ProtectedRoute from '../Components/ProtectedRoute';

const RoutesComponent = () => {
  const { isAuthenticated, isLoading, hasInitialized, initialize } = useAuthStore();

  useEffect(() => {
    if (!hasInitialized) {
      initialize();
    }
  }, [initialize, hasInitialized]);

  // Mostrar loading spinner mientras se inicializa la app
  if (isLoading || !hasInitialized) {
    return <LoadingSpinner />;
  }  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Rutas protegidas */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Header />
              <main className="pt-16">
                <Dashboard />
              </main>
            </ProtectedRoute>
          } />
          
          <Route path="/profile" element={
            <ProtectedRoute>
              <Header />
              <main className="pt-16">
                <ProfilePage />
              </main>
            </ProtectedRoute>
          } />
          
          <Route path="/discover" element={
            <ProtectedRoute>
              <Header />
              <main className="pt-16">
                <DiscoverPage />
              </main>
            </ProtectedRoute>
          } />
          
          <Route path="/challenges" element={
            <ProtectedRoute>
              <Header />
              <main className="pt-16">
                <ChallengesPage />
              </main>
            </ProtectedRoute>
          } />
          
          <Route path="/messages" element={
            <ProtectedRoute>
              <Header />
              <main className="pt-16">
                <MessagesPage />
              </main>
            </ProtectedRoute>
          } />
          
          <Route path="/progress" element={
            <ProtectedRoute>
              <Header />
              <main className="pt-16">
                <ProgressPage />
              </main>
            </ProtectedRoute>
          } />
          
          {/* Ruta de fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RoutesComponent;
