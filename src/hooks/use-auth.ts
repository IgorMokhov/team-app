import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // that there may be asynchronous operations to validate the token
    setIsLoading(false);
  }, [token]);

  return {
    isAuth: !!token,
    isLoading,
  };
};
