import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Shop from "./Pages/Shop";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./store/actions/actions";
import Details from "./components/ShopPage/Details/Details";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Contact from "./components/Contact/Contact";
import Wishlist from "./Pages/Wishlist";
import Logout from "./components/Logout/Logout";
import Blog from "./Pages/Blog";
import Faq from "./Pages/Faq";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts("", ""));
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/product/:name">
            <Details />
          </Route>
          <Route path="/myaccount">
            <Register />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
