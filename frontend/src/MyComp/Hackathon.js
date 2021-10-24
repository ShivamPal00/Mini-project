import React from 'react';
import '../App.css';

import Footer from './Homepage/Footer';
import Navbar from './Homepage/Navbar';
import { Link } from 'react-router-dom';

import LogoCard from './LogoCard';
import Schedule from './Schedule';
import Result from './Result';


export default function Hackathon(props) {
    return (



        <div className="color-2 ">
            <Navbar />

            <div className=' container p-5 ' >
                <div className=" d-flex p-5  justify-content-center   " >
                    <img src={process.env.PUBLIC_URL + '/img/hackathon.png'} className="img-fluid event-image " alt="None" />

                    <LogoCard eventname="ZEAL 2021" insta="instaid" fb="fbid" linkedin="twitterid"
                fburl=""
                instaurl=""
                linkedinurl="" />
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='  d-flex subevents justify-content-between align-items-center my-4  color-4 border-radius'>

                        <div className="   ">

                            <b>VCET HACKATHON RELOADED</b>
                            <ul className="text-light">
                                <li> 1-4 Participants per team are allowed.</li>
                                <li> Entry fee : Rs. 500/- per team.</li>
                                <li> Event dates : 1st & 2nd October 2021</li>

                            </ul>

                        </div>

                        <div className='  '> <Link className="color-2-button text-center   " to="/form">REGISTER</Link></div>


                    </div>
                </div>
                <div className='  text-center text-light '>
                        <h2 className=''> ABOUT VCET HACKATHON</h2>
                        <div className="  my-3 p-5 color-4 border-radius">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper
                                nunc in molestie.</p><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper
                                nunc in molestie.</p><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper
                                nunc in molestie.</p><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper
                                nunc in molestie.</p><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper
                                nunc in molestie.</p><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit donec consectetur semper
                                nunc in molestie.</p><br />

                        </div>

                    </div>







                <Schedule />
                <Result />



            </div>
            <Footer />
        </div>
    )
}
