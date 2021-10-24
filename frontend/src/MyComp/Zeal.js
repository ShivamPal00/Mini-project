import React from "react";
import "../App.css";

import Footer from "./Homepage/Footer";
import Navbar from "./Homepage/Navbar";

import SubEvent from "./SubEvent";
import LogoCard from "./LogoCard";
import Schedule from "./Schedule";
import Result from "./Result";
import SubEventdata from "./SubEventdata";

export default function Zeal() {
  return (
    <div className="color-2 ">
      <Navbar />

      <div className=" container pt-5">
        <div className=" d-flex pt-5  justify-content-center   ">
          <img
            src={process.env.PUBLIC_URL + "/img/zeal.png"}
            className="img-fluid event-image "
            alt="None"
          />

          <LogoCard eventname="ZEAL 2021" instaid="instaid" fbid="fbid" twitterid="twitterid" />
        </div>

        <h2 className="text-light text-center ">SUB-EVENTS</h2>
        {SubEventdata.map((data) => {
            return (
              <div className=" d-flex justify-content-center    ">
              <SubEvent
              eventname={data.name}
              form1={data.form1}
              form2={data.form2}
              form3={data.form3}
             
              />
              </div>
            );
          })}

      

        <Schedule />
        <Result />
      </div>
      <Footer />
    </div>
  );
}
