import React from 'react'
import Carousel from './Homepage/Carousel'
import Footer from './Homepage/Footer'
import Navbar from './Homepage/Navbar'
import '../App.css';

export default function Hdairies() {
    return (
        <div>
            <Navbar/>
            <Carousel carousel1 = "/img/carousel-1.png"
                    carousel2 = "/img/carousel-2.png"
                    carousel3 ="/img/carousel-3.png"/>
            <Footer/>

        </div>
    )
}