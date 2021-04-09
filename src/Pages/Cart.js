import { useEffect } from "react";
import Checkout from "../components/CartComponents/Checkout/Checkout";
import ProductInCart from "../components/CartComponents/ProductInCart/ProductInCart";
import TopComponent from "../components/TopComponent/TopComponent";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <TopComponent text="CART" />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ProductInCart />
          </div>
          <div className="col-md-4">
            <Checkout />
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
