import React from 'react'
import Cards from './Cards'
import Carousel from './Carousel'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Homepage() {
    return (
        <div>
            <Navbar/>
            <Carousel/>
            <Cards/>
            
            <Footer/>
        </div>
    )
}
