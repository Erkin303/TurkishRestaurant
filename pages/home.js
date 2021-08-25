import React ,{useState}from 'react'
import { HomeW } from '../styleW/HomeW'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { useSelector } from 'react-redux';
import Link from 'next/link'
import { IoIosBed } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";




import SwiperCore, {
    Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Navigation]); 
  

const Home = () => {

    const meal = useSelector(state => state.meal);
    const [numberM, setnumberM] = useState(0);
    console.log(numberM);
    return (
        <HomeW>
            <section className='section1'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className='p-3'>
                                <p className='inhWords'>Queb Lounge 360 Sultanahmet Restaurant</p>
                                <p className='inhWords2'>With a few summertime exceptions, most of Turkey’s innovative restaurants are located in its largest and most cosmopolitan city: Istanbul. From Michelin star-worthy tasting
                                     menus to Turkish classics with a modern twist, these are the best restaurants in Turkey.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div  className='ps-3'>
                                <img src="./bbq.jpg" alt="picture"  className='bbqPicture'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section2'>
                <h1 className='text-center'>Meal of Turkey</h1>
                <h5 className='text-center'>Turkish cuisine is one of the most varied and richest in the world.</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div>
                            <Swiper navigation={true} className="swiperMeal" onSlideChange={(e)=>setnumberM(e.activeIndex)}>
                            {meal.map((v,i)=>{
                                return <SwiperSlide><div className='mealSwiperImgCard'>
                                    <img src={v.img} alt=""  className='swiperImgMeal'/></div>
                                </SwiperSlide>
                            })}      
                            </Swiper>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <div className='d-flex justify-content-center align-items-center'>
                               <div className='infMeal'>
                                   <p className='fs-3 text-center'>{meal[numberM].name}</p>
                                   <p>{meal[numberM].inf}</p>
                                   <p>font-awsome</p>   
                               </div>
                               
                            </div>
                            <div className='d-flex justify-content-end '>
                                   <Link href='/meal'><button className='btn btnColor'>About</button></Link>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            {/* section3 */}
            <section className='section3'>
                <div className="container">
                    <h1>For Family</h1>
                    <p>Lorem ipsum dolor sit gnam! Velit ullam totam voluptatum saepe lib nam! Velit ullam totam voluptatum saeero eveniet sit.</p>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div>
                                <p> family skdf djkw sdjksd c <IoIosBed></IoIosBed></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div>
                                <p> <span className='fs-3 m-0 pe-1'><BsPeopleFill/></span> rasm</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div>
                                <p>rasm</p>
                            </div>
                        </div>

                        <div className="col-lg-8 col-sm-12">
                            <div>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                        <div>
                                            <p>rasm2</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div>
                                            <p>rasm2</p>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div>
                                            <p>rasm3</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> <div className="col-lg-4 col-sm-12">
                            <div>
                                <p>rasm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
        </HomeW>
    )
}

export default Home
