import React, { useEffect } from "react";
import Rating from "react-rating";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewCart = ({ review }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="col-lg-4 col-12 p-2 text-center d-flex flex-sm-cols justify-content-center align-items-center"
    >
      <div
        className="card p-2  d-flex justify-content-center align-items-center shadow"
        style={{
          width: "15rem",
          height: "18rem",
        }}
      >
        <img
          src={
            review.data.img
              ? review.data.img
              : "https://i.ibb.co/2sSgMJr/account.png"
          }
          className="rounded-circle w-25"
          alt="..."
        />
        <div className="card-body">
          <h4>{review.data.name}</h4>
          <p className="card-text">{review.data.messege}</p>
          <Rating
            initialRating={review.data.rating}
            readonly
            emptySymbol="far fa-star text-warning"
            fullSymbol="fas fa-star text-warning"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewCart;
