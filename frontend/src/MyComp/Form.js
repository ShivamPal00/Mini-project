import React from 'react';
import Navbar from './Homepage/Navbar';
import './style.css';
export default function Form() {
    return (
        <div>
            <Navbar/>
            <div className='container'>
                <h3>REGISTRATION FORM</h3>
                <div className='form-first-div'>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control form-width" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Shivam Pal" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Contact no.</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="9999999999" />
                </div>
                <button className='btn btn-primary'>Submit</button>

                </div>
            </div>
        </div>
    )
}
