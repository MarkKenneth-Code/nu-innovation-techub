import NavBar from '../components/shared/NavBar';
import Banner from '../components/products/Banner';
// import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Navigate, useRoutes, Route } from 'react-router-dom';
import Innovations from '../components/products/Innovations';
import Books from '../components/products/Books';
import Souvenirs from '../components/products/Souvenirs';
import Footer from '../components/shared/Footer';
import ProductDetail from '../components/products/ProductDetail';
import { Helmet } from 'react-helmet';
export default function Products() {
  let { path } = useRoutes();

  return (
    <>
      <Helmet>
        <title>Products | NU TechHub</title>
      </Helmet>
      <NavBar />
      <Banner label="PRODUCTS" />
      <Navigate>
        <Route path={`${path}/innovations`} component={Innovations} exact />
        <Route path={`${path}/books`} component={Books} exact />
        <Route path={`${path}/souvenirs`} component={Souvenirs} exact />

        <Route path={`${path}/innovations/:productID`} component={ProductDetail} />
        <Route path={`${path}/books/:productID`} component={ProductDetail} />
        <Route path={`${path}/souvenirs/:productID`} component={ProductDetail} />
      </Navigate>

      <Footer />
    </>
  );
}
