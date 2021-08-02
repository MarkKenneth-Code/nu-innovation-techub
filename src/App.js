import Router from './routes';
import ThemeConfig from './theme';
import ScrollToTop from './components/ScrollToTop';
import { Navigate, useRoutes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./mainpage/pages/Home'));

export default function App() {
  return (
    // (
    //   <Router>
    //     <Suspense fallback={<div>loading...</div>}>
    //       <Navigate>
    //         <Route path="/home" component={Home} exact />
    //       </Navigate>
    //     </Suspense>
    //   </Router>
    // ),
    <ThemeConfig>
      <ScrollToTop />
      <Router />
    </ThemeConfig>
  );
}
