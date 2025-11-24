import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 ml-72">
        <Header />
        <main className="pt-16 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

