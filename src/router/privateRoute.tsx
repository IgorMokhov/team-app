import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/use-auth';

export const PrivateRoute = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};
