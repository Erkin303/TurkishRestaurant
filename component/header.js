import React from 'react'
import { ComponentsW } from '../styleW/componentW'

const Header = () => {
    return (
        <ComponentsW>
            <div className='header'>
                <div>
                <img src="tr.jpeg" alt="" />
                </div>
                <ul>
                    <li><a href="#">Meal</a></li>
                    <li><a href="#">Drink</a></li>
                    <li><a href="#">Desert</a></li>
                </ul>
            </div>
            
        </ComponentsW>
    )
}

export default Header
