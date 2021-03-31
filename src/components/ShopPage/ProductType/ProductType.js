import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../../store/actions/actions";
import "./style.scss";

export default function ProductType({ productType, onClick }) {
  return (
    <div className="form-check pl-0 mb-3 text-left">
      <div className="cursor">
        <p className="text-uppercase" onClick={onClick}>
          {productType}
        </p>
      </div>
    </div>
  );
}
