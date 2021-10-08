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
                    <img src="https://m.media-amazon.com/images/I/511kcZbYtJL._SY450_.jpg" className="card-img-top" alt="None" />
                    <Link to="/events">ZEAL</Link>
                </div>
                <div className="card Cards">
                    <img src="https://m.media-amazon.com/images/I/511kcZbYtJL._SY450_.jpg" className="card-img-top" alt="None" />
                    <Link to="/events">ZEAL</Link>
                </div>
                <div className="card Cards">
                    <img src="https://m.media-amazon.com/images/I/511kcZbYtJL._SY450_.jpg" className="card-img-top" alt="None" />
                    <Link to="/events">ZEAL</Link>
                </div>
            </div>
            <br />
            <br />
            <div id="events2">
                <span align='center'>EVENT DAIRIES</span>
                <div className="Flex">
                    <div className="card Cards">
                        <img src="https://m.media-amazon.com/images/I/511kcZbYtJL._SY450_.jpg" className="card-img-top" alt="None" />
                        <span>TEXT</span>
                    </div>
                    <div className="card Cards">
                        <img src="https://m.media-amazon.com/images/I/511kcZbYtJL._SY450_.jpg" className="card-img-top" alt="None" />
                        <span>TEXT</span>
                    </div>
                    <div className="card Cards">
                        <img src="https://m.media-amazon.com/images/I/511kcZbYtJL._SY450_.jpg" className="card-img-top" alt="None" />
                        <span>TEXT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
