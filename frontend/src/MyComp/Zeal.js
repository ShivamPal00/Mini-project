import React from 'react';
import '../App.css';

import Footer from './Homepage/Footer';
import Navbar from './Homepage/Navbar';

import SubEvent from './SubEvent';
import LogoCard from './LogoCard';
import Schedule from './Schedule';
import Result from './Result';


export default function Zeal() {
    return (
        <>
         <Navbar />
        <div className="color-2 ">
           

            <div className=' container p-5 ' >
                <div className=" d-flex  justify-content-center  p-5 " >
                    <img src={process.env.PUBLIC_URL + '/img/zeal.png'} className="img-fluid event-image " alt="None" />

                    <LogoCard eventname="" instaid="" fbid="" twitterid="" />
                </div>

                <h2 className="text-light text-center ">SUB-EVENTS</h2>
                
                <div className=" d-flex justify-content-center    " >
                    <SubEvent eventname="DANCE" form1="SOLO-DANCE" form2="DUET-DANCE" form3="GROUP-DANCE" /> </div>
                <div className=" d-flex justify-content-center    " > <SubEvent eventname="SINGING" form1="SOLO-SINGING" form2="DUET-SINGING" form3="GROUP-SINGING" /></div>
                <div className=" d-flex justify-content-center    " >  <SubEvent eventname="DANCE" form1="SOLO-DANCE" form2="DUET-DANCE" form3="GROUP-DANCE" /></div>





                <Schedule />
                <Result />



            </div>
            <Footer />
        </div>
        </>
    )
}
