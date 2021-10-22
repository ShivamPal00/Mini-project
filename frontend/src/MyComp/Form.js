import React, { useState } from "react";
import Navbar from "./Homepage/Navbar";
import "../App.css";
export default function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  let a, value;
  const handleInputs = (e) => {
    console.log(e);
    a = e.target.name;
    value = e.target.value;

    setUser({ ...user, [a]: value });
  };

  return (
    <div className="color-2 p-5 text-light">
      <Navbar />
      <h3 className="text-center p-5">REGISTRATION FORM</h3>
      <div className="  d-flex justify-content-center  ">
        <div className="form color-4 mb-5 border-radius">
          <div className=" ">
            <label for="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control form-width"
              value={user.email}
              onChange={handleInputs}
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="">
            <label for="exampleFormControlInput1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={user.name}
              onChange={handleInputs}
              id="exampleFormControlInput1"
              placeholder="Shivam Pal"
            />
          </div>
          <div className="">
            <label for="exampleFormControlInput1" className="form-label">
              Contact no.
            </label>
            <input
              type="number"
              name="phone"
              className="form-control"
              value={user.phone}
              onChange={handleInputs}
              id="exampleFormControlInput1"
              placeholder="9999999999"
            />
          </div>
          <div className="d-flex my-2 justify-content-center">
            <button className="color-2-button  ">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
