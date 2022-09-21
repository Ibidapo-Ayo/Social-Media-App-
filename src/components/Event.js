import React from "react";
import "./css/event-page.css";
import EventImg from "./Birthday cake.png";

const Events = () => {
  return (
    <div className="container">
      <div className="event-details">
        <h3>Birthday Bash</h3>
        <p>Hosted by Elysia</p>

        <div className="item-container">
          <div className="items">
            <div className="icon">
              <i className="fa fa-user"></i>
            </div>
            <div className="items-details">
              <p className="item-header">18 August 6:00pm </p>
              <p>to 19 August 1:00pm UTC +10</p>
            </div>
          </div>
          <div className="items">
            <div className="icon">
              <i className="fa fa-user"></i>
            </div>
            <div className="items-details">
              <p className="item-header">Street name</p>
              <p>Suburb, State, Postcode</p>
            </div>
          </div>
        </div>
      </div>
      <div className="event-img">
        <img src={EventImg} alt="" />
      </div>
    </div>
  );
};

export default Events;
