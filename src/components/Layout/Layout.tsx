import Content from '@components/Content/Content';
import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Sidebar from '@components/SideBar/SideBar';
import React, { FC } from 'react';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
