import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import LoadingSpinner from '../LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, hasInitialized } = useAuthStore();

  // Mostrar loading mientras se inicializa o está cargando
  if (isLoading || !hasInitialized) {
    return <LoadingSpinner />;
  }

  // Si no está autenticado, redirigir al home
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si está autenticado, mostrar el contenido
  return children;
};

export default ProtectedRoute;
