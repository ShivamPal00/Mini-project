import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function SubEvent(props) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center subevents my-4  color-4 border-radius">
        <div>
          <b>{props.subeventname}</b>
          <ul className="text-light">
            <li>{props.form1}</li>
            <li>{props.form2}</li>
            <li>{props.form3}</li>
          </ul>
        </div>

        <div>
          {" "}
          <Link className="color-2-button text-center" to="/register">
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
}
