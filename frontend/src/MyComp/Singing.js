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
            src={process.env.PUBLIC_URL + "/img/Singing.jpeg"}
            alt="None"
          />

          <div className=" color-4 mx-5 p-4 border-radius">
            <h2> DESCRIPTION</h2>
            <span>
              There are three ways you can particpate in Singing Compeition.
              <br/>              
              1] Solo-Singing
              <br/> 
              2] Duet-Singing
              <br/> 
              3] Group-Singing
            </span>
            <br />
            <br />
            
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

          <div className="d-flex justify-content-center  p-5">
            <div className=" border-radius ">
              <img
                src={process.env.PUBLIC_URL + "/img/Singing2.jpeg"}
                className="border-radius  Cards card-img-top"
                alt="None"
              />
            </div>
            <div className="border-radius    ">
              <img
                src={process.env.PUBLIC_URL + "/img/Singing3.jpeg"}
                className="border-radius mx-5 Cards card-img-top"
                alt="None"
              />
            </div>
            <div className="border-radius ">
              <img
                src={process.env.PUBLIC_URL + "/img/Singing4.jpeg"}
                className="border-radius  Cards card-img-top"
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
