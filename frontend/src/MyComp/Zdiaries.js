import React from 'react'
import Carousel from './Homepage/Carousel'
import Footer from './Homepage/Footer'
import Navbar from './Homepage/Navbar'
import '../App.css';

export default function Zdairies() {
    return (
        <div>
            <Navbar/>
            <Carousel carousel1 = "/img/zd-carousel-1.jpg"
                    carousel2 = "/img/zd-carousel-2.jpg"
                    carousel3 ="/img/zd-carousel-3.jpg"/>
            <Footer/>

        </div>
    )
}
