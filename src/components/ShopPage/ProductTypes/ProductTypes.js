import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts, keepProduct } from "../../../store/actions/actions";
import ProductType from "../ProductType/ProductType";
import "./style.scss";
export default function ProductTypes() {
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    product.length > 1 && dispatch(getProducts("product_type", product));
  }, [product]);

  const onClickHandler = (event) => {
    const reg = /\s/;
    const trimmed = event.target.innerHTML.trim();
    const pr = trimmed.replace(reg, "_");
    setProduct(`=${pr}`);
    dispatch(keepProduct(pr));
  };

  return (
    <section className="mb-4 product-type">
      <ProductType productType="blush" onClick={onClickHandler} />

      <ProductType productType="eyebrow" onClick={onClickHandler} />

      <ProductType productType="bronzer" onClick={onClickHandler} />

      <ProductType productType="eyeshadow" onClick={onClickHandler} />

      <ProductType productType="eyeliner" onClick={onClickHandler} />

      <ProductType productType="foundation" onClick={onClickHandler} />

      <ProductType productType="lip liner" onClick={onClickHandler} />

      <ProductType productType="lipstick" onClick={onClickHandler} />

      <ProductType productType="mascara" onClick={onClickHandler} />

      <ProductType productType="nail polish" onClick={onClickHandler} />
    </section>
  );
}
