import React from 'react';
import './style.css';

import Footer from './Homepage/Footer';
import Navbar from './Homepage/Navbar';
import { Link } from 'react-router-dom';


export default function Hackathon() {
    return (
        <div>
            <Navbar/>
        
        <div className='Events '>
            <div className="Flex my-5">
                <img src={process.env.PUBLIC_URL + '/img/hackathon.png'}   class="img-fluid subcards" alt="None" />

                <div className="mx-5 card ">
                    <h2>ZEAL 2021
                        MUMBAI LOCAL</h2>

                    <div className='Center' >
                        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="None" className="logo" />
                        <span>Facebbok</span><br />
                        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="None" className="logo" />
                        <span>Facebbok</span><br />
                        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="None" className="logo" />
                        <span>Facebbok</span><br />
                    </div>
                </div>
            </div>
            <div>
            <h2>SUB-EVENTS</h2>
            <div className='Flex Events2 my-4'>

                <div >
                    
                    <b>VCET HACKATHON RELOADED</b>
                    <ul>
                        <li>1-4 Participants per team are allowed.</li>
                        <li>Entry fee : Rs. 500/- per team.</li>
                        <li>Event dates : 1st & 2nd October 2021</li>
                    </ul>
                </div>
                <div className=' Button-margin my-5'>
                <Link to="/form">REGISTER</Link>
                    {/* <button className='btn btn-primary'>Register</button> */}
                    </div>
            </div>
           
            <div className='  Center '>
                    <h2 className='mr-10'> ABOUT VCET HACKATHON</h2>
                    <div class="Events2">
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
            <div className='Events2 my-5'>
                <h2 className="Center ">SCHEDULE</h2>
                <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" class="img-fluid my-3 Result" alt="None"></img>
            </div>
            <div className='Events2 my-5'>
                <h2 className="Center ">RESULT</h2>
                <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" class="img-fluid my-3 Result" alt="None"></img>
            </div>
            </div>
           
            
        </div>
        <Footer/>
        </div>
    )
}
