import React from 'react'
import { ComponentsW } from '../styleW/componentW'
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook ,FiTwitter} from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";






const Footer = () => {
    return (
        <ComponentsW>
            <div className="footer">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div>
                            <p>Meal</p>
                            <p>Drink</p>
                            <p>Desert</p>
                            <p>Place</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div>
                            <p>Numbers:</p>
                            <p>+9989-(91)-191-94-42</p>
                            <p>+9989-(93)-561-94-94</p>
                            <p>Rooms</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input className='form-control w-50' type="email" value='@gmail.com' id="email"/>
                            <a href="#"><span className='fs-3'><AiOutlineInstagram/></span></a>
                            <a href="#"><span className='fs-3'><FiFacebook/></span></a>
                            <a href="#"><span className='fs-3'><FaTelegramPlane/></span></a>
                            <a href="#"><span className='fs-3'><FiTwitter/></span></a>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </ComponentsW>
    )
}

export default Footer
