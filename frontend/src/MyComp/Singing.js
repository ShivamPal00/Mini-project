import React from 'react'
import { Link } from "react-router-dom";
import Footer from "./Homepage/Footer";
import Navbar from "./Homepage/Navbar";
import "../App.css";

export default function Singing() {
    return (
        <div className="color-2 text-center text-light">
      <Navbar />
      <div className="container pt-5">
        <div className="d-flex justify-content-center pt-5">
          <img
            className="border-radius "
            src={process.env.PUBLIC_URL + "/img/dance.png"}
            alt="None"
          />

          <div className=" color-4 mx-5 p-4 border-radius">
            <h2> DESCRIPTION</h2>
            <span>
              SINGING 
            </span>
            <br />
            <br />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
            </span>
            <div className="my-5">
              <h3>ENTRY FEE Rs.100</h3>
              <br />
              <Link className=" color-2-button" to="/form">
                REGISTER
              </Link>
              {/* <button className='btn btn-primary my-3'>Register</button> */}
            </div>
          </div>
        </div>

        <h2 className=""> RULES</h2>
        <div class=" color-4 p-5 border-radius">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
            consectetur semper nunc in molestie.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
            consectetur semper nunc in molestie.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
            consectetur semper nunc in molestie.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
            consectetur semper nunc in molestie.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
            consectetur semper nunc in molestie.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
            consectetur semper nunc in molestie.
          </p>
          <br />
        </div>

        <div className=" my-5">
          <h2>MORE FROM THIS EVENT</h2>

          <div className="d-flex justify-content-center border-radius">
            <div className="       ">
              <img
                src={process.env.PUBLIC_URL + "/img/zeal.png"}
                className=" card-img-top"
                alt="None"
              />
            </div>
            <div className="    ">
              <img
                src={process.env.PUBLIC_URL + "/img/zeal.png"}
                className="card-img-top"
                alt="None"
              />
            </div>
            <div className=" ">
              <img
                src={process.env.PUBLIC_URL + "/img/zeal.png"}
                className="card-img-top"
                alt="None"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
}
