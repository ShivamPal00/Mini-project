import React from 'react'
import Carousel from './Homepage/Carousel'
import Footer from './Homepage/Footer'
import Navbar from './Homepage/Navbar'
import '../App.css';

export default function Hdairies() {
    return (
        <div>
            <Navbar/>
            <Carousel carousel1 = "/img/hd-carousel-1.jpg"
                    carousel2 = "/img/hd-carousel-2.jpg"
                    carousel3 ="/img/hd-carousel-3.jpg"/>
            <Footer/>

        </div>
    )
}