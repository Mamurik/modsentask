import Content from '@components/UI/Content/Content';
import Footer from '@components/UI/Footer/Footer';
import Header from '@components/UI/Header/Header';
import Sidebar from '@components/UI/SideBar/SideBar';
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
