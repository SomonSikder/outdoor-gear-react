import React, { useEffect, useState } from "react";
import SingleOrder from "../MyOrder/SingleOrder";

const ManageOrder = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://serene-wildwood-97102.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
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
            const remaing = allOrders.filter((product) => product._id !== id);
            setAllOrders(remaing);
          }
        });
    }
  };
  return (
    <div className="shadows">
      <h3 className=" text-center text-info">This is Your All Orders</h3>
      <div className="row ">
        <div className="col-lg-12 text-center justify-content-center">
          {allOrders?.map((product) => (
            <SingleOrder
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            ></SingleOrder>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
