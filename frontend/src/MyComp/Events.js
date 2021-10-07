import React from 'react';
import './style.css';

import Footer from './Homepage/Footer';
import Navbar from './Homepage/Navbar';


export default function Events() {
    return (
        <div>
            <Navbar/>
        
        <div className='Events '>
            <div className="Flex my-5">
                <img src="https://media.istockphoto.com/photos/meenakshi-hindu-temple-in-madurai-tamil-nadu-south-india-picture-id490736905?k=20&m=490736905&s=612x612&w=0&h=p0AkEjfTfQC6sfSnP1mEU-0BpkYMBYQn_fwcXHiq6kI=" class="img-fluid" alt="None" />

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
            <div className='Flex Events2 my-4'>

                <div >
                    <h2>SUB-EVENTS</h2>
                    <b>DANCE</b>
                    <ul>
                        <li>GROUP DANCE</li>
                        <li>DUET DANCE</li>
                        <li>SOLO DANCE</li>
                    </ul>
                </div>
                <div className=' Button-margin my-5'><button className='btn btn-primary'>Register</button></div>
            </div>
            <div className='Flex Events2 my-4'>

                <div >
                    <h2>SUB-EVENTS</h2>
                    <b>DANCE</b>
                    <ul>
                        <li>GROUP DANCE</li>
                        <li>DUET DANCE</li>
                        <li>SOLO DANCE</li>
                    </ul>
                </div>
                <div className=' Button-margin my-5'><button className='btn btn-primary'>Register</button></div>
            </div>
            <div className='Flex Events2 my-4 '>

                <div >
                    <h2>SUB-EVENTS</h2>
                    <b>DANCE</b>
                    <ul>
                        <li>GROUP DANCE</li>
                        <li>DUET DANCE</li>
                        <li>SOLO DANCE</li>
                    </ul>
                </div>
                <div className=' Button-margin my-5'><button className='btn btn-primary'>Register</button></div>
            </div>
            <div className='Flex Events2 my-4'>

                <div >
                    <h2>SUB-EVENTS</h2>
                    <b>DANCE</b>
                    <ul>
                        <li>GROUP DANCE</li>
                        <li>DUET DANCE</li>
                        <li>SOLO DANCE</li>
                    </ul>
                </div>
                <div className=' Button-margin my-5'><button className='btn btn-primary'>Register</button></div>
            </div>
            <div className='Events2 my-5'>
                <h2 className="Center ">SCHEDULE</h2>
                <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" class="img-fluid my-3 Result" alt="None"></img>
            </div>
            <div className='Events2 my-5'>
                <h2 className="Center ">SCHEDULE</h2>
                <img src="https://www.whatsappimages.in/wp-content/uploads/2021/01/Boys-Feeling-Very-Sad-Images-Pics-Downlaod.jpg" class="img-fluid my-3 Result" alt="None"></img>
            </div>
            </div>
            <div>
                <Footer/>
            </div>
            
        </div>
    )
}
