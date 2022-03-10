import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-down" className="bg-dark py-4">
      <div className="container pt-3">
        <div className="row container text-center text-warning">
          <div className="col-lg-4">
            <h2 className="font-style">Outdoor Gear Store</h2>
          </div>
          <div className="col-lg-4">
            <h3>Follow Us</h3>
            <div className="flex">
              <img
                src="https://i.ibb.co/yN1R7hW/instagram-alt-logo-24.png"
                alt=""
              />
              <img
                src="https://i.ibb.co/TKhMQYb/facebook-square-logo-24.png"
                alt=""
              />
              <img src="https://i.ibb.co/fMcywsc/youtube-logo-24.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4">
            <h3>Support</h3>
            <p>FAQs</p>
            <p>Support Center</p>
            <p>Contact</p>
          </div>
        </div>
      </div>

      <p className="text-light text-center">
        &copy; 2022 Olive. All right reserve.
      </p>
    </div>
  );
};

export default Footer;
