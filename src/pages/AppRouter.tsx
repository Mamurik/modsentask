import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Layout from '@components/UI/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ColorsPage from './ColorsPage';
import FavoritePage from './FavoritePage';
import HomePage from './HomePage';
import IconsPage from './IconsPage';
import NotFoundPage from './NotFoundPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <ErrorBoundary
                fallback={<div>Что-то пошло не так на главной 🙈</div>}
              >
                <HomePage />
              </ErrorBoundary>
            </Layout>
          }
        />
        <Route
          path="/favorite"
          element={
            <Layout>
              <ErrorBoundary
                fallback={<div>Не удалось загрузить избранное 🙈</div>}
              >
                <FavoritePage />
              </ErrorBoundary>
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
        <Route
          path="/colors"
          element={
            <ErrorBoundary
              fallback={<div>Ошибка при загрузке страницы с цветами 🙈</div>}
            >
              <ColorsPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/icons"
          element={
            <ErrorBoundary
              fallback={<div>Ошибка при загрузке страницы с иконками 🙈</div>}
            >
              <IconsPage />
            </ErrorBoundary>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
