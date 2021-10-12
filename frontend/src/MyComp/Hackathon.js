import React from 'react';
import './style.css';

import Footer from './Homepage/Footer';
import Navbar from './Homepage/Navbar';
import { Link } from 'react-router-dom';
import SubEvent from './SubEvent';
import LogoCard from './LogoCard';
import Schedule from './Schedule';
import Result from './Result';


export default function Hackathon() {
    return (

        <div className="color-1">
            <Navbar />

            <div className='Events events-abg  ' >
                <div className="Flex my-5 events-a3bg " style={{ width: 1100, padding: 35 }}>
                    <img src={process.env.PUBLIC_URL + '/img/avahan.png'} class="img-fluid subcards" alt="None" />

                    <LogoCard eventname=""instaid=""fbid=""twitterid=""/>
                </div>
                <div className="events-a3bg conatiner" style={{ width: 1100, padding: 20 }}>
                    <h2 className="text-light Center ">SUB-EVENTS</h2>

                    <div className='Flex Events2 my-4 color-4 border-radius'>

                        <div >

                            <b>VCET HACKATHON RELOADED</b>
                            <ul className="text-light">
                                <li> 1-4 Participants per team are allowed.</li>
                                <li> Entry fee : Rs. 500/- per team.</li>
                                <li> Event dates : 1st & 2nd October 2021</li>

                            </ul>
                        </div>
                        <div className=' Button-margin my-5  '>

                            <Link className="zeal-button" to="/form">REGISTER</Link>
                        </div>
                    </div>
                    <div className='  Center text-light'>
                        <h2 className='mr-10'> ABOUT VCET HACKATHON</h2>
                        <div class="Events2 color-4">
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


            </div>
            <Footer />
        </div>
    )
}
