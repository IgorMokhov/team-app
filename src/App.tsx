import { Routes, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { MainPage } from './pages/MainPage';
import { DetailsPage } from './pages/DetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';
import { useAppDispatch } from './redux-hooks';
import { useEffect } from 'react';
import { setToken } from './features/user/user-slice';
import { PrivateRoute } from './router/privateRoute';
import './App.css';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/users" element={<MainPage />} />
          <Route path="/users/:id" element={<DetailsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
