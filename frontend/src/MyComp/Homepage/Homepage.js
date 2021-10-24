

import Cards from './Cards'
import Carousel from './Carousel'
import Footer from './Footer'
import Navbar from './Navbar'
import '../../App.css';

export default function Homepage() {
   
    
    
    
     
    return (
        <div>
            <Navbar />
            <Carousel carousel1 = "/img/carousel-1.png"
                    carousel2 = "/img/carousel-2.png"
                    carousel3 ="/img/carousel-3.png"/>
            <Cards/>
            
            <Footer/>
        </div>
    )
}
