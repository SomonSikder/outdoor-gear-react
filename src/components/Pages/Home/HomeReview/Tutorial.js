import React from "react";
import YouTube from "react-youtube";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Tutorial = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: false,
    },
  };
  return (
    <div
      data-aos="flip-left"
      className="container mx-auto d-flex justify-content-center my-5"
    >
      <div>
        <h2 className="text-center text-warning my-3">Learn With Us</h2>
        <YouTube videoId="fZndJO2jUJk" opts={opts} />
      </div>
    </div>
  );
};

export default Tutorial;
