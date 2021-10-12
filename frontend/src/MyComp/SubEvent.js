import React from 'react'
import { Link } from 'react-router-dom';

export default function SubEvent(props) {
    return (
        <div>
            <div className='Flex Events2 my-4 color-4 border-radius'>

                <div >

                    <b>{props.subeventname}</b>
                    <ul className="text-light">
                        <li>{props.form1}</li>
                        <li>{props.form2}</li>
                        <li>{props.form3}</li>
                      
                    </ul>
                </div>
                <div className=' Button-margin my-5  '>
                    
                    <Link className="zeal-button" to="/register">REGISTER</Link>
                </div>
            </div>
        </div>
    )
}
