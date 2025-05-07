import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Layout from '@components/Layout/Layout';
import { routes } from '@constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FavoritePage from './FavoritePage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routes.HOME}
          element={
            <Layout>
              <ErrorBoundary fallback={<div>Oops something went wrong </div>}>
                <HomePage />
              </ErrorBoundary>
            </Layout>
          }
        />
        <Route
          path={routes.FAVORITE}
          element={
            <Layout>
              <ErrorBoundary fallback={<div>Oops something went wrong </div>}>
                <FavoritePage />
              </ErrorBoundary>
            </Layout>
          }
        />
        <Route
          path={routes.NOT_FOUND}
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
