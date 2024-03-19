import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import {
  fetchProducts,
  selectAllProducts,
} from "../store/reducers/productSlice";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
  const [open, setOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState({});
  const dispatch = useDispatch();

  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const productData = useSelector(selectAllProducts);


  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleCardClick = (id) => {
    const productDetail = productData.find((product) => product.id === id);
    setSingleProduct(productDetail);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let content;

  if (productStatus === "loading") {
    content = <h1>Loading...</h1>;
  } else if (productStatus === "succeeded") {
    content = productData.map((productData) => (
      <ProductCard
        key={productData.id}
        product={productData}
        onCardClick={() => handleCardClick(productData.id)}
      />
    ));
  } else if (productStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section className="product__container">
     {content}{" "}
       {open && <ProductDetail
        open={open}
        onClose={handleClose}
        singleProduct={singleProduct}
      />}
    </section>
  );
};

export default ProductList;
