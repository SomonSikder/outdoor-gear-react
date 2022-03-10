import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./hover.css";

const SingleProduct = ({ product }) => {
  const { name, img, description, price, _id } = product;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="col translateY">
      <div
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-mirror="true"
        data-aos-duration="300"
        className=" hover-effect"
      >
        <div className="card shadow">
          <img src={img} className="card-img-top" alt="..." height={200} />
          <div className="card-body">
            <h6 className="card-title">{name}</h6>
            <p className="card-text fs-6">{description.slice(0, 150)}</p>
          </div>
          <div className="card-footer d-flex justify-content-between ">
            <h5 className="text-danger fw-bold fs-2 ">$ {price}</h5>
            <NavLink to={`/order/${_id}`}>
              <button className="btn  btn-warning">Buy Now</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
