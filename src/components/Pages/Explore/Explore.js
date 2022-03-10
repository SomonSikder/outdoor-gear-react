import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://serene-wildwood-97102.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container py-5">
      <h3 className="text-center text-warning my-5">All Your Needs</h3>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products?.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Explore;
