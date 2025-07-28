// components/layouts/Layout.tsx

import { LayoutProps } from '@/interface';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
