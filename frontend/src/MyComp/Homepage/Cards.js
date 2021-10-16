import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';


export default function Cards() {
    return (
        <div className=" " >
            
                <div className="color-4 text-center    p-5 "id="card-events">
                    <h2  className="text-light  " > EVENTS</h2>
                    <div className="  d-flex justify-content-center  ">

                        <div className=" Cards  mx-4"  >
                            <img src={process.env.PUBLIC_URL + '/img/zeal.png'} alt="None" />
                            <Link className="color-2-button " to="/zeal">  ZEAL</Link>
                        </div>
                        <div className="Cards  mx-4 " >
                            <img src={process.env.PUBLIC_URL + '/img/avahan.png'} alt="None" />
                            <Link className="color-2-button " to="/avahan">AVAHAN</Link>
                        </div>
                        <div className=" Cards  mx-4 " >
                            <img src={process.env.PUBLIC_URL + '/img/hackathon.png'} alt="None" />
                            <Link className="color-2-button " to="/hackathon">HACKATHON</Link>
                        </div>
                    </div>
                </div>
                <div className="color-2  text-center   p-5 "id="card-diaries">
                    <h2  className="text-light  " > DIARIES</h2>
                    <div className="  d-flex justify-content-center  " >

                        <div className=" Cards mx-4  " >
                            <img src={process.env.PUBLIC_URL + '/img/zeal.png'} alt="None" />
                            <Link className="color-4-button " to="/zdiaries">  ZEAL DIARIES</Link>
                        </div>
                        <div className="Cards mx-4 " >
                            <img src={process.env.PUBLIC_URL + '/img/avahan.png'} alt="None" />
                            <Link className="color-4-button " to="/adiaries">AVAHAN DIARIES</Link>
                        </div>
                        <div className=" Cards mx-4  " >
                            <img src={process.env.PUBLIC_URL + '/img/hackathon.png'} alt="None" />
                            <Link className="color-4-button " to="/hdiaries">HACKATHON-DIARIES</Link>
                        </div>
                    </div>
                </div>
           
           
               
        </div>
    )
}
