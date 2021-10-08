import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Homepage/Footer'
import Navbar from './Homepage/Navbar'

export default function Register() {
    return (
        <div>
            <Navbar />
            <div >
                <div className="Flex my-5 Events Register-first-div" >
                    <img src={process.env.PUBLIC_URL + '/img/dance.png'}class="img-fluid register-cards" alt="None" />

                    <div className='mx-5 Register'  >


                        <div className='container' >
                            <div className='Center'>
                                <h2> DESCRIPTION</h2>
                                <span>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit donec</span><br /><br />
                                <span>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit donec</span>
                                <div className='my-3'>
                                    <h3>ENTRY FEE Rs.100</h3>
                                    <Link to="/form">REGISTER</Link>
                                    {/* <button className='btn btn-primary my-3'>Register</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' Events Center'>
                    <h2 className='mr-10'> RULES</h2>
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
                <div className=' my-5 Events Center'>
                    <h2>MORE FROM THIS EVENT</h2>
                    
                        <div className="Flex Register-margin ">
                            <div className="card Register-Cards">
                                <img src="https://m.media-amazon.com/images/I/511kcZbYtJL._SY450_.jpg" className="card-img-top" alt="None" />
                               
                            </div>
                            <div className="card Register-Cards">
                                <img src="https://m.media-amazon.com/images/I/511kcZbYtJL._SY450_.jpg" className="card-img-top" alt="None" />
                                
                            </div>
                            <div className="card Register-Cards">
                                <img src="https://m.media-amazon.com/images/I/511kcZbYtJL._SY450_.jpg" className="card-img-top" alt="None" />
                                
                            </div>
                        </div>
                    
                </div>
                <Footer/>
            </div>
        </div>
    )
}
