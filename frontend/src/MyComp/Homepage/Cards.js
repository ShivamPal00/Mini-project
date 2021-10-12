import React from 'react'
import { Link } from 'react-router-dom';
import './homepage.css';
// import style from 'styled-components';

export default function Cards() {
    return (
        <div id="events" >
            <div>
                <div className="color-4 Center">
                    <h2 align='center' className="text-light " > EVENTS</h2>
                    <div className="Flex ">

                        <div className=" Cards   " >
                            <img  src={process.env.PUBLIC_URL + '/img/zeal.png'} alt="None" />
                            <Link className="zeal-button " to="/zeal">  ZEAL</Link>
                        </div>
                        <div className="Cards  " >
                            <img src={process.env.PUBLIC_URL + '/img/avahan.png'} alt="None" />
                            <Link className="zeal-button " to="/avahan">AVAHAN</Link>
                        </div>
                        <div className=" Cards  " >
                            <img  src={process.env.PUBLIC_URL + '/img/hackathon.png'} alt="None" />
                            <Link className="zeal-button " to="/hackathon">HACKATHON</Link>
                        </div>
                    </div>
                </div>

                <div id="events2" className="dairies color-2  " >
                    <h2 align='center ' className="text-light Center">EVENT DAIRIES</h2>
                    <div className="Flex  ">
                        <div className="  Cards  ">
                            <img src={process.env.PUBLIC_URL + '/img/zeal.png'} alt="None" />
                            <Link className="dairies-button " to="/zdairies">ZEAL DAIRIES </Link>
                        </div>
                        <div className="  Cards ">
                            <img src={process.env.PUBLIC_URL + '/img/avahan.png'} alt="None" />
                            <Link className="dairies-button" to="/adairies">AVAHAN DAIRIES</Link>
                        </div>
                        <div className="  Cards ">
                            <img src={process.env.PUBLIC_URL + '/img/hackathon.png'} className="card-img-top" alt="None" />

                            <Link className="dairies-button text-center" to="/hdairies">HACKATHON DAIRIES</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
