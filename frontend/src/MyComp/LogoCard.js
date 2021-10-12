import React from 'react'

export default function LogoCard(props) {
    return (
        <div>
              <div className="   color-4 text-light logo-cards my-4 border-radius Center" style={{ padding: 10 }}>
                        <h2>{props.eventname}
                            </h2>

                        <div className=' ' >
                            <div className="Flex ">
                                <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="None" />

                                <h4 className="my-4">{props.fbid}</h4><br />
                            </div>
                            <div className="Flex ">
                                <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="None" />

                                <h4 className="my-4">{props.instaid}</h4><br />
                            </div>
                            <div className="Flex ">
                                <img className="logo" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="None" />

                                <h4 className="my-4">{props.twitterid}</h4><br />
                            </div>
                        
                        </div>
                    </div>
        </div>
    )
}
