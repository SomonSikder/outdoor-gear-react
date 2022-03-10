// all necessary file imported
import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../NotFound/notFound.png';

// Not found page
const NotFound = () => {
  return (
    <div className="d-flex justify-content-center text-center mt-5">
      <div>
      <img src={img} alt="" width="500px" className="mx-auto" />
      <h3>
        Please try agin. <span className="text-red-500">Page Not Found !!</span>{' '}
      </h3>
      <NavLink to="/home">Back to Home</NavLink>
      </div>
    </div>
  );
};

export default NotFound;

