import React from 'react';
import './style.css';

import Footer from './Homepage/Footer';
import Navbar from './Homepage/Navbar';
import { Link } from 'react-router-dom';
import SubEvent from './SubEvent';
import LogoCard from './LogoCard';
import Schedule from './Schedule';
import Result from './Result';


export default function Zeal() {
    return (
        <div className="color-2">
            <Navbar />

            <div className='Events   ' >
                <div className="Flex my-5 color-2  " style={{ padding: 35 }}>
                    <img src={process.env.PUBLIC_URL + '/img/zeal.png'} className="img-fluid subcards" alt="None" />

                  <LogoCard eventname=""instaid=""fbid=""twitterid=""/>
                </div>
                <div className=" conatiner" style={{ width: 1100, padding: 20 }}>
                    <h2 className="text-light Center ">SUB-EVENTS</h2>

                    <div><SubEvent eventname="DANCE"form1="SOLO-DANCE"form2="DUET-DANCE"form3="GROUP-DANCE" />
                    <SubEvent eventname="SINGING"form1="SOLO-SINGING"form2="DUET-SINGING"form3="GROUP-SINGING" />
                    <SubEvent eventname="DANCE"form1="SOLO-DANCE"form2="DUET-DANCE"form3="GROUP-DANCE" />
                    <SubEvent eventname="DANCE"form1="SOLO-DANCE"form2="DUET-DANCE"form3="GROUP-DANCE" />
                      </div>


               <Schedule/>
               <Result/>
                </div>


            </div>
            <Footer />
        </div>
    )
}
