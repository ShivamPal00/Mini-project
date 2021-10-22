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

    // const PostData =async  (e)=>{
    //         e.preventDefault();
    //         const { name,email,phone} = user;

    //         const res = await fetch("/register",{
    //             method: "POST",
    //             headers: {
    //             "COntent-Type": "application/json"
    //         },
    //         body:JSON.stringify({
    //             name ,email ,phone
    //         })
    //         });

    //         const data = await res.json();

    //         if(data.status=== 422 || !data){
    //             window.alert("invalid Registration");
    //             console.log("invalid Registration");
    //         }
    //         else {
    //             window.alert(" Registration SUccessful");
    //             console.log(" Registration SUccessful");
                
    //         }


    // }

    return (
        <div>
            <Navbar/>
            <div method="POST" className='container'>
                <h3>REGISTRATION FORM</h3>
                <div className='form-first-div'>
                <div className="mb-3">
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
                <button className='btn btn-primary' >Submit</button>
                

                </div>
            </div>
        </div>
    )
}
