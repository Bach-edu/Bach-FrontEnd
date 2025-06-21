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
        <Routes>
          {/* Ruta principal siempre muestra Home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* Rutas protegidas */}
          {isAuthenticated && (
            <>
              <Route path="/dashboard" element={
                <>
                  <Header />
                  <main className="pt-16">
                    <Dashboard />
                  </main>
                </>
              } />
              <Route path="/profile" element={
                <>
                  <Header />
                  <main className="pt-16">
                    <ProfilePage />
                  </main>
                </>
              } />
              <Route path="/discover" element={
                <>
                  <Header />
                  <main className="pt-16">
                    <DiscoverPage />
                  </main>
                </>
              } />
              <Route path="/challenges" element={
                <>
                  <Header />
                  <main className="pt-16">
                    <ChallengesPage />
                  </main>
                </>
              } />
              <Route path="/messages" element={
                <>
                  <Header />
                  <main className="pt-16">
                    <MessagesPage />
                  </main>
                </>
              } />
              {/* TODO: Crear componente ProgressPage */}
              {/*
              <Route path="/progress" element={
                <>
                  <Header />
                  <main className="pt-16">
                    <ProgressPage />
                  </main>
                </>
              } />
              */}
            </>
          )}
          
          {/* Rutas de fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default RoutesComponent;
