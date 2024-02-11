import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { DetailsPage } from './pages/DetailsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import './App.css';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/users" element={<MainPage />} />
        <Route path="/users/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};