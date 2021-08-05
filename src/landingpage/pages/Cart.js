import NavBar from "../components/shared/NavBar";
import Banner from "../components/shared/Banner";
import Footer from "../components/shared/Footer";
import { Helmet } from "react-helmet";
import "../styles/Cart.css";
import { useEffect, useState } from "react";
import { cartData } from "../mockdata/CartData";
import CartItem from "../components/cart/CartItem";
import { Route, Switch } from "react-router-dom";
import Information from "../components/cart/Information";
import Payment from "../components/cart/Payment";

export default function Cart() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(
      cartData.map((item) => (
        <CartItem
          productName={item.productName}
          productImage={item.productImage}
          productPrice={item.productPrice}
        />
      ))
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Cart | NU TechHub</title>
      </Helmet>
      <NavBar />
      <Banner label="MY CART" />
      <div className="container my-5 d-flex flex-md-row flex-column-reverse">
        <div className="personal-info pe-3">
          <h3>Shipping Details</h3>
          <Switch>
            <Route path="/mycart/information" component={Information} />
            <Route path="/mycart/payment" component={Payment} />
          </Switch>
        </div>
        <div className="cart-items ">
          <h3>Your Items</h3>

          <div className="items-container mt-4">{items}</div>
          <div className="d-flex justify-content-between border-top pt-3">
            <h4>Total: </h4>
            <h4 className="text-success">₱300.00</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
