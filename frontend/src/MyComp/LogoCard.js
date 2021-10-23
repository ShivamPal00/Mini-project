import React from "react";
import "../App.css";

export default function LogoCard(props) {
  return (
    <div>
      <div className="d-flex flex-column justify-content-evenly color-4 text-light event-description-cards my-4 border-radius text-center">
        <h2 className="zeal-title fs-1">{props.eventname}</h2>
        
        <div>
          <div className=" d-flex ">
            <img
              className="logo "
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              alt="None"
            />
            <h4 className="d-flex align-items-center">{props.fbid}</h4>
            <br />
          </div>

          <div className="d-flex ">
            <img
              className="logo"
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              alt="None"
            />
            <h4 className="d-flex align-items-center">{props.instaid}</h4>
            <br />
          </div>

          <div className="d-flex ">
            <img
              className="logo"
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              alt="None"
            />
            <h4 className="d-flex align-items-center">{props.twitterid}</h4>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
