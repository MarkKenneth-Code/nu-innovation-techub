import { Navigate, useRoutes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
// import Home from './mainpage/pages/Home';
import Product from './mainpage/pages/Products';
import Cart from './mainpage/pages/Cart';
import Innovators from './mainpage/pages/Innovators';
import AboutUs from './mainpage/pages/AboutUs';
import Contacts from './mainpage/pages/ContactUs';
import Home from './mainpage/pages/Home';
import { lazy, Suspense } from 'react';

// const Home = lazy(() => import('./mainpage/pages/Home'));

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> }
        // { path: 'home', element: <Home /> }
      ]
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'innovator', element: <Blog /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
