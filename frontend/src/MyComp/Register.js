import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Homepage/Footer'
import Navbar from './Homepage/Navbar'

export default function Register() {
    return (
        <div className="color-2">
            <Navbar />
            <div  >
                <div className="Flex my-5 Events "style={{width:1100}}  >
                   <img className="border-radius register-cards"src={process.env.PUBLIC_URL + '/img/dance.png'} alt="None" />

                    <div className='mx-5 Register Center color-4 border-radius text-light'style={{padding:10,width:500}}  >


                        
                            <div className='my-5 ' >
                                <h2> DESCRIPTION</h2>
                                <span>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit donec</span><br /><br />
                                <span>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit donec</span>
                                <div className='my-3'>
                                    <h3>ENTRY FEE Rs.100</h3><br />
                                    <Link className=" zeal-button" to="/form">REGISTER</Link>
                                    {/* <button className='btn btn-primary my-3'>Register</button> */}
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div className=' Events Center events-a3bg  text-light 'style={{width:1100,padding:50}}>
                    <h2 className='mr-10'> RULES</h2>
                    <div class="Events2 color-4 border-radius" style={{width:1000}}>
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
                <div className=' my-5 Events Center  text-light'style={{width:1100}}>
                    <h2>MORE FROM THIS EVENT</h2>
                    
                        <div className="Flex "style={{padding:30}}>
                            <div className="card Register-Cards border-radius  register-margin  ">
                                <img src={process.env.PUBLIC_URL + '/img/zeal.png'} className=" card-img-top" alt="None" />
                               
                            </div>
                            <div className="card Register-Cards border-radius  register-margin ">
                                <img src="" className="card-img-top" alt="None" />
                                
                            </div>
                            <div className="card Register-Cards border-radius  register-margin ">
                                <img src="" className="card-img-top" alt="None" />
                                
                            </div>
                        </div>
                    
                </div>
                <Footer/>
            </div>
        </div>
    )
}
