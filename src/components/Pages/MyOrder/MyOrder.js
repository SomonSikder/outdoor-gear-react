import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import SingleOrder from "./SingleOrder";

const MyOrder = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://serene-wildwood-97102.herokuapp.com/order`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const procced = window.confirm("Are sure want to Delete?");
    if (procced) {
      const url = `https://serene-wildwood-97102.herokuapp.com/order/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Succssfully");
            const remaing = products.filter((product) => product._id !== id);
            setProducts(remaing);
          }
        });
    }
  };

  return (
    <div className="container pt-5">
      <h3 className="my-5 pt-5 text-center text-warning">
        This is Your All Orders
      </h3>
      <div className="row d-flex justify-content-center align-items-center ">
        <div className="col-lg-8 text-center justify-content-center">
          {products?.map(
            (product) =>
              product.email === user.email && (
                <SingleOrder
                  key={product._id}
                  product={product}
                  handleDelete={handleDelete}
                ></SingleOrder>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
