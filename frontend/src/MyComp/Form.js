import React, {useState} from 'react';
import Navbar from './Homepage/Navbar';
import './style.css';
export default function Form() {
    const [user, setUser] = useState(
        {
            name:"",email:"",phone:""
        }
    );
    let a , value;
    const handleInputs =(e)=>{
        console.log(e);
        a=e.target.name;
        value=e.target.value;

        setUser({ ...user, [a]:value});
    }  

    return (
        <div className="color-2" style={{height:720}} >
            <Navbar/>
            <div className='   form  text-light 'style={{width:950}}>
                <h3 className="Center">REGISTRATION FORM</h3>
                <div className='form-first-div color-4 border-radius'>
                <div className="mb-3 ">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control form-width"value={user.email}onChange={handleInputs}  id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" name ="name"className="form-control" value={user.name}onChange={handleInputs} id="exampleFormControlInput1" placeholder="Shivam Pal" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Contact no.</label>
                    <input type="number" name="phone"className="form-control"value={user.phone}onChange={handleInputs}  id="exampleFormControlInput1" placeholder="9999999999" />
                </div>
               <button className="zeal-button">Submit</button>

                </div>
            </div>
        </div>
    )
}
