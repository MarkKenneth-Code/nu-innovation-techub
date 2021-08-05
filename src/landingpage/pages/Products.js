import NavBar from '../components/shared/NavBar';
import Banner from '../components/products/Banner';
// import { Route, Switch, useRouteMatch } from "react-router-dom";
import { BrowserRouter, useMatch, Route, Routes, useRoute } from 'react-router-dom';
import Innovations from '../components/products/Innovations';
import Books from '../components/products/Books';
import Souvenirs from '../components/products/Souvenirs';
import Footer from '../components/shared/Footer';
import ProductDetail from '../components/products/ProductDetail';
import { Helmet } from 'react-helmet';
export default function Products() {
  // let { path } = useRouteMatch();

  return (
    <>
      <NavBar />
      <Banner label="PRODUCTS" />
      <Route path={`products/innovations`} component={Innovations} exact />
      {/* <Route path={`products/books`} component={Books} exact />
      <Route path={`products/souvenirs`} component={Souvenirs} exact />

      <Route path={`products/innovations/:productID`} component={ProductDetail} />
      <Route path={`products/books/:productID`} component={ProductDetail} />
      <Route path={`products/souvenirs/:productID`} component={ProductDetail} /> */}

      {/* <Route path={`products/innovations`} element={<Innovations />} />
      <Route path="books" element={<Books />} />
      <Route path="souvenirs" element={<Souvenirs />} />
      <Route path="innovations/:productID" element={<Innovations />} />
      <Route path="books/:productID" element={<Books />} />
      <Route path="souvenirs/:productID" element={<Souvenirs />} /> */}

      <Footer />
    </>
  );
}
