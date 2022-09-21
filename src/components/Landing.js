import React from "react";
import "./css/landing-page.css";
import { Link } from "react-router-dom";

import Img from "./Landing page image.svg";

const Landing = () => {
  return (
    <div className="container">
      <div className="imgContainer">
        <img src={Img} alt="" />
      </div>

      <div className="createEvent">
        <h3>Imagine if</h3>
        <h3 className="text-gradients">Snapchat</h3>
        <h3>had events.</h3>
        <div className="subtext">
          <p>
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
        <div className="btn-container">
          <Link to="/create">
            <button className="create-event-btn">🎉 Create my event</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
