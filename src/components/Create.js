import React from "react";
import "./css/create-event.css";
import { Link } from "react-router-dom";

import EventImg from "./Birthday cake.png";

const Create = () => {
  return (
    <div className="container">
      <div className="create-event">
        <h3>Create Event</h3>

        <div className="item-container">
          <div className="items">
            <form action="#">
              <div className="form-group">
                <label>Event name</label>
                <input type="text" placeholder="Enter Name" />
              </div>
              <div className="form-group">
                <label>Host name</label>
                <input type="text" placeholder="Enter Host name" />
              </div>
              <div className="form-group">
                <label>Location </label>
                <input type="text" placeholder="Enter Location" />
              </div>
              <div className="form-group">
                <label>Date </label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Event photo </label>
                <input type="file" />
              </div>
              <Link to="/event">
                <button className="create-event-btn">Next</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className="event-img">
        <img src={EventImg} alt="" />
      </div>
    </div>
  );
};

export default Create;
