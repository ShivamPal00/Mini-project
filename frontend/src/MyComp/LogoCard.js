import React from 'react'
import '../App.css';

export default function LogoCard(props) {
    return (
        <div>
              <div className="   color-4 text-light event-description-cards my-4 border-radius text-center" >
                        <h2>{props.eventname}
                            </h2>

                        
                            <div className=" d-flex ">
                                <img className="logo " src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="None" />

                                <h4 className="my-4">{props.fbid}</h4><br />
                            </div>
                            <div className="d-flex ">
                                <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="None" />

                                <h4 className="my-4">{props.instaid}</h4><br />
                            </div>
                            <div className="d-flex ">
                                <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="None" />

                                <h4 className="my-4">{props.twitterid}</h4><br />
                            </div>
                        
                       
                    </div>
        </div>
    )
}
