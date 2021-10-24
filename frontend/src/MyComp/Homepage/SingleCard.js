import React from "react";
import { Link } from "react-router-dom";


export default function SingleCard(props) {



  return (
    <div className=" Cards mx-4">
    <Link to={props.link}>
      
      <img className="border-radius " src={props.img} alt="None" />
    </Link>
    <Link className="color-4-button" to={props.link}>
      {props.linkName}
    </Link>
  </div>
  )
}


