import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ComponentsW } from '../styleW/componentW'
import Drawes from './drawes';
import { BsFillBrightnessHighFill,BsMoon} from "react-icons/bs";


const Header = () => {
    const dayNight = useSelector(state => state.dayNight);
    const dispatch = useDispatch();

    const Ozgartirish =(e)=>{
        const action={type:"THEME", payload:!dayNight};
        return dispatch(action);
    }

    return (
        <ComponentsW>
          
           
           <div className={`obshiyclass ${dayNight && "header" || "header2"}`}>
                <div>
                    <img src="tr.jpeg" alt="" />
                </div>
                <ul className='d-flex align-items-center'>
                    <li><button className={dayNight && "btn btnColor" || "btn btnColor2"} onClick={()=>Ozgartirish()}>
                         <span className={dayNight && "d-block" || "d-none"} ><BsFillBrightnessHighFill/> </span>
                         <span className={dayNight && "d-none" || "d-block"} ><BsMoon/></span>
                         </button>
                         </li>
                    <li><Drawes/></li>
                  
                </ul>
            </div>
         
             
        </ComponentsW>
    )
}

export default Header
