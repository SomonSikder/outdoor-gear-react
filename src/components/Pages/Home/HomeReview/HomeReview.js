import React, { useEffect, useState } from "react";
import ReviewCart from "./ReviewCart";

const HomeReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://serene-wildwood-97102.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="container my-5">
      <h2 className="text-center text-warning my-3">Customer Reviws</h2>

      <div className="my-5">
        <div className="row d-flex justify-content-center">
          {reviews?.map((review) => (
            <ReviewCart key={review._id} review={review}></ReviewCart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeReview;
