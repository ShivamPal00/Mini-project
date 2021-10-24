import React from 'react'
import Carousel from './Homepage/Carousel'
import Footer from './Homepage/Footer'
import Navbar from './Homepage/Navbar'
import '../App.css';

export default function Adairies() {
    return (
        <div>
            <Navbar/>
            <Carousel carousel1 = "/img/ad-carousel-1.jpeg"
                    carousel2 = "/img/ad-carousel-2.jpg"
                    carousel3 ="/img/ad-carousel-3.jpeg"/>
            <Footer/>

        </div>
    )
}