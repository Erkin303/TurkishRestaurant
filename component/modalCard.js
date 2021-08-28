import React from 'react'
import { useSelector } from 'react-redux';
import { HomeW } from '../styleW/HomeW'

const ModalCartd = () => {
    const dayNight = useSelector(state => state.dayNight);

    return (
        <HomeW>
            <div className={dayNight && "container modalBigacrd1" || "container modalBigacrd2"}>
                <div>

                </div>
                <div>
                    <div className='modalCard'>
                    <h2>We love our guests</h2>
                    </div>
                    <p>If you want to ordering meal and others, you can send message !</p>
                    <p>+998-(91)-191-94-42</p>
                    <p>+998-(91)-191-89-89</p>
                    <label htmlFor="sending">Write here</label>
                   <textarea name="sending" id="sending" cols="20" rows="5" class="form-control"></textarea>
                   <p className='text-end mt-1'><button className='btnColor btn'>Send</button></p>

                </div>
            </div>
            
        </HomeW>
    )
}

export default ModalCartd
