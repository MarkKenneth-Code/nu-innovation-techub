import { Navigate, useRoutes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Product from './landingpage/pages/Products';
import Cart from './mainpage/pages/Cart';
import Innovators from './landingpage/pages/Innovators';
import AboutUs from './landingpage/pages/AboutUs';
import ContactUs from './landingpage/pages/ContactUs';
import Home from './landingpage/pages/Home';
import Innovations from './mainpage/components/products/Innovations';
import Books from './mainpage/components/products/Books';
import Souvenirs from './mainpage/components/products/Souvenirs';
import Achievement from './mainpage/components/innovators/Achievement';
import Innovator from './mainpage/components/innovators/Innovator';
import ProductDetail from './landingpage/components/products/ProductDetail';

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
      ]
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/innovators',
      element: <Innovators />,
      children: [
        { path: '/', element: <Navigate to="/innovators/innovator" replace /> },
        { path: 'innovator', element: <Innovator /> },
        { path: 'achievement', element: <Achievement /> }
      ]
    },
    {
      path: '/aboutus',
      element: <AboutUs />
    },
    {
      path: '/contactus',
      element: <ContactUs />
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/products',
      element: <Product />,
      children: [
        { path: 'products', element: <Navigate to="/products/innovations" replace /> },
        { path: 'innovations', element: <Innovations /> },
        { path: 'books', element: <Books /> },
        { path: 'souvenirs', element: <Souvenirs /> }
      ]
    },
    {
      path: '/products/:id',
      element: <ProductDetail />
    },

    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        // { path: 'innovator', element: <Blog /> },
        // { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> }
        // { path: '*', element: <Navigate to="/404" /> }
      ]
    },

    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
