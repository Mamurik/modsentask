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
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/favorite"
          element={
            <Layout>
              <FavoritePage />
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
        <Route path="/colors" element={<ColorsPage />} />
        <Route path="icons" element={<IconsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
