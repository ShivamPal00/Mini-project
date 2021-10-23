import React from "react";
import { Link } from "react-router-dom";

const SingleCard = (props) => {
  return (
    <div className="Cards mx-4">
      <Link to={props.link}>
        {" "}
        <img src={`${process.env.PUBLIC_URL}${props.img}`} alt="None" />
      </Link>
      <Link className="color-4-button" to={props.link}>
        {props.linkName}
      </Link>
    </div>
  );
};

export default SingleCard;
