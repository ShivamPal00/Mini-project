import React from 'react';
import './style.css';

import Footer from './Homepage/Footer';
import Navbar from './Homepage/Navbar';
import { Link } from 'react-router-dom';


export default function Zeal() {
    return (
        <div>
            <Navbar/>
        
        <div className='Events '>
            <div className="Flex my-5">
                <img src={process.env.PUBLIC_URL + '/img/zeal.png'}  class="img-fluid subcards " alt="None" />

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
                    
                    <b>DANCE</b>
                    <ul>
                        <li>GROUP DANCE</li>
                        <li>DUET DANCE</li>
                        <li>SOLO DANCE</li>
                    </ul>
                </div>
                <div className=' Button-margin my-5'>
                <Link to="/register">REGISTER</Link>
                    {/* <button className='btn btn-primary'>Register</button> */}
                    </div>
            </div>
           
            <div className='Flex Events2 my-4'>

                <div >
                    
                    <b>DANCE</b>
                    <ul>
                        <li>GROUP DANCE</li>
                        <li>DUET DANCE</li>
                        <li>SOLO DANCE</li>
                    </ul>
                </div>
                <div className=' Button-margin my-5'>
                <Link to="/register">REGISTER</Link>
                    {/* <button className='btn btn-primary'>Register</button> */}
                    </div>
            </div>
            <div className='Flex Events2 my-4 '>

                <div >
                   
                    <b>DANCE</b>
                    <ul>
                        <li>GROUP DANCE</li>
                        <li>DUET DANCE</li>
                        <li>SOLO DANCE</li>
                    </ul>
                </div>
                <div className=' Button-margin my-5'>
                <Link to="/register">REGISTER</Link>
                    {/* <button className='btn btn-primary'>Register</button> */}
                    </div>
            </div>
            <div className='Flex Events2 my-4'>

                <div >
                    
                    <b>DANCE</b>
                    <ul>
                        <li>GROUP DANCE</li>
                        <li>DUET DANCE</li>
                        <li>SOLO DANCE</li>
                    </ul>
                </div>
                <div className=' Button-margin my-5'>
                <Link to="/register">REGISTER</Link>
                    {/* <button className='btn btn-primary'>Register</button> */}
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
