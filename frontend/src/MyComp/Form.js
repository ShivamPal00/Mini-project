import React, { useState } from "react";
import Navbar from "./Homepage/Navbar";
import "../App.css";

export default function Form() {
  const [user, setUser] = useState({
    name: "",
    eventname: "",
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


  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, phone, eventname } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, eventname
      })
    });

    const data = await res.json();
    

    if (data.status === 422 || !data) {
      window.alert("invalid Registration");
      console.log("invalid Registration");
    }
    else {
      window.alert(" Registration Successful");
      console.log(" Registration Successful");

    }


  }


  return (
    <div className="color-2 p-5 text-light form-height">
      <Navbar />
      <h3 className="text-center p-5">REGISTRATION FORM</h3>
      <div className="  d-flex justify-content-center  ">
        <div className="form color-4 mb-5 border-radius">
          <form method="POST">
            <div className=" ">
              <label htmlFor="exampleFormControlInput1" className="form-label">
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
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={user.name}
                onChange={handleInputs}
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div className="">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Event-Name
              </label>
              <input
                type="text"
                name="eventname"
                className="form-control"
                value={user.eventname}
                onChange={handleInputs}
                id="exampleFormControlInput1"
                placeholder="Event-Name"
              />
            </div>
            <div className="">
              <label htmlFor="exampleFormControlInput1" className="form-label">
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
              <input type="submit" className="color-2-button" value="submit" onClick={PostData} />
            </div>
          </form>
       
        </div>
      </div>
    </div>
  );
}
