import { Range } from "rc-slider";
import ProductTypes from "../ProductTypes/ProductTypes";
import "./Filter.scss";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByBrand,
  getProductsForPriceFilter,
} from "../../../store/actions/actions";
import ProductType from "../ProductType/ProductType";

const Filter = () => {
  const products = useSelector((state) => state.productsReducer.data);
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [brands, setBrands] = useState([]);
  const dispatch = useDispatch();
  const productType = useSelector((state) => state.filterReducer.product);
  useEffect(() => {
    setBrands(getBrands());
  }, [products]);

  const onChangeHandler = (event) => {
    setFirstValue(event[0]);
    setSecondValue(event[1]);
    dispatch(getProductsForPriceFilter(firstValue, secondValue));
  };

  const getBrands = () => {
    let allBrands = {};
    products.map((product) => {
      return allBrands[product.brand]
        ? allBrands[product.brand]++
        : (allBrands[product.brand] = 1);
    });
    return Object.entries(allBrands);
  };

  const onClickHandler = (brand) => {
    let br = encodeURI(brand);
    dispatch(getProductsByBrand(productType, br));
  };

  const togglerHandler = () => {
    document.getElementById("toggle-filter").classList.toggle("close");
  };

  return (
    <div className="container bg-white mt-4 filterContainer">
      <button
        className="close-toggler  d-block d-lg-none "
        onClick={togglerHandler}
      >
        FILTER{" "}
      </button>
      <section className="filter-bar " id="toggle-filter">
        <h6 className="text-left text-uppercase fw-bold p-4 ">
          Product Categories
        </h6>
        <ProductTypes />
        <hr />
        <section className="price mb-4">
          <h6 className="fw-bold mb-3 text-left p-2">Price</h6>
          <form>
            <Range min={0} max={80} onChange={onChangeHandler} />
          </form>
          {"$"}
          {firstValue} - {"$"}
          {secondValue}
        </section>
        <hr />
        <section className="text-left text-uppercase">
          <h6 className="fw-bold p-2">Brands</h6>
          {brands.length > 1 &&
            brands.map((brand) => (
              <ProductType
                productType={brand[0]}
                onClick={() => onClickHandler(brand[0])}
                count={brand[1]}
              />
            ))}
        </section>
      </section>
    </div>
  );
};

export default Filter;
