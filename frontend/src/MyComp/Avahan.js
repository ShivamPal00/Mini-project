import React from 'react';
import '../App.css';

import Footer from './Homepage/Footer';
import Navbar from './Homepage/Navbar';

import SubEvent from './SubEvent';
import LogoCard from './LogoCard';
import Schedule from './Schedule';
import Result from './Result';
import SubEventdata2 from './SubEventdata2';


export default function Avahan() {
    return (
        <div className="color-2 ">
        <Navbar />

        <div className=' container p-5 ' >
            <div className=" d-flex p-5  justify-content-center   " >
                <img src={process.env.PUBLIC_URL + '/img/avahan.png'} className="img-fluid event-image " alt="None" />

                <LogoCard eventname="AVAHAN 2021" insta="avahan_vcet" fb="VCET AVAHAN" linkedin="Vcet Sport Committee"
                fburl="https://www.instagram.com/avahan_vcet/?hl=en"
                instaurl="https://www.facebook.com/vidyavardhinicollege/posts/850427498682244"
                linkedinurl="https://in.linkedin.com/in/vcet-sports-committee-85574b208" />
            </div>

            <h2 className="text-light text-center ">SUB-EVENTS</h2>
            
            {SubEventdata2.map((data) => {
            return (
              <div className=" d-flex justify-content-center    ">
              <SubEvent
              eventname={data.name}
              form1={data.form1}
              form2={data.form2}
              form3={data.form3}
              link={data.link}
             
              />
              </div>
            );
          })}





            <Schedule />
            <Result />



        </div>
        <Footer />
    </div>
    )
}
