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
              src="img/Facebook-logo.png"
              alt="None"
            />
            <h2><a href={props.instaurl} className="d-flex align-items-center text-decoration text-light">{props.insta}</a></h2>
            <br />
          </div>

          <div className="d-flex ">
            <img
              className="logo mx-3"
              src="img/Insta-logo.png"
              alt="None"
            />
           <h2> <a href={props.fburl} className="d-flex align-items-center text-decoration text-light">{props.fb}</a></h2>
            <br />
          </div>

          <div className="d-flex ">
            <img
              className="logo mx-3"
             
              src="img/linkedin-logo.png"
              alt="None"
            />
           <h2> <a href={props.linkedinurl} className="d-flex align-items-center text-decoration text-light">{props.linkedin}</a></h2>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
