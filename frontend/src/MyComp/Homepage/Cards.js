import React from 'react'
import { Link } from 'react-router-dom';
import './homepage.css';
// import style from 'styled-components';

export default function Cards() {
    return (
        <div id="events">
            <span align='center'> EVENTS</span>
            <div className="Flex">

                <div className="card Cards" >
                    <img src={process.env.PUBLIC_URL + '/img/zeal.png'} alt="None" />
                    <Link to="/zeal">ZEAL</Link>
                </div>
                <div className="card Cards">
                    <img src={process.env.PUBLIC_URL + '/img/avahan.png'} alt="None" />
                    <Link to="/avahan">AVAHAN</Link>
                </div>
                <div className="card Cards">
                    <img src={process.env.PUBLIC_URL + '/img/hackathon.png'} alt="None" />
                    <Link to="/hackathon">HACKATHON</Link>
                </div>
            </div>
            <br />
            <br />
            <div id="events2">
                <span align='center'>EVENT DAIRIES</span>
                <div className="Flex">
                    <div className="card Cards">
                        <img src={process.env.PUBLIC_URL + '/img/zeal.png'} alt="None" />
                        <Link to="/zdairies">Zeal-Dairies</Link>
                    </div>
                    <div className="card Cards">
                    <img src={process.env.PUBLIC_URL + '/img/avahan.png'} alt="None" />
                        <Link to="/adairies">Avahan-Dairies</Link>
                    </div>
                    <div className="card Cards">
                        <img src={process.env.PUBLIC_URL + '/img/hackathon.png'} className="card-img-top" alt="None" />
                        <Link to="/hdairies">Hackathon-Dairies</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
