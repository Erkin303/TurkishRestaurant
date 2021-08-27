import React ,{useState}from 'react'
import { HomeW } from '../styleW/HomeW'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link'

import { BsPeopleFill ,BsStarHalf} from "react-icons/bs";
import { AiFillStar ,AiFillHeart} from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";





import SwiperCore, {
    Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Navigation]); 
  

const Home = () => {

    const meal = useSelector(state => state.meal);
    const drink = useSelector(state => state.drink);
    const dayNight = useSelector(state => state.dayNight);

    const [numberM, setnumberM] = useState(0);
    const [numberD, setnumberD]= useState(0);

   
    console.log(dayNight);
    return (
        <HomeW>
            <section className={dayNight && "section1" || "section11"}>
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
                            <div  className=' d-flex justify-content-center'>
                                <img src="./bbq.jpg" alt="picture"  className='bbqPicture'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* section2 meal swiper */}
            <section  className={dayNight && "section2" || "section22"} >
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
            <section  className={dayNight && "section3" || "section33"} >
                <div className="container">
                   <div className='text-center'>
                   <h1>For Family</h1>
                    <p>Lorem ipsum dolor sit gnam! Velit ullam totam voluptatum saepe lib nam! Velit ullam totam voluptatum saeero eveniet sit.</p>
                   </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='familyInf'>
                                <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><BsPeopleFill/></span> Family's Celebrating </p>
                                <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                    voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                                <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                <div className='d-flex justify-content-between '>
                                    <button className='btn btn-success'>Ordering</button>
                                    <button className='btn btnColor'>Inform</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='familyPictures'>
                                <img src="https://www.restobiz.ca/wp-content/uploads/2020/06/Toronto-family-meal-deals.jpg" alt="picture" className='familyP1' />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='familyInf'>
                                <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><BsPeopleFill/></span> Family's Celebrating </p>
                                <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                    voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                                <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                <div className='d-flex justify-content-between '>
                                    <button className='btn btn-success'>Ordering</button>
                                    <button className='btn btnColor'>Inform</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-sm-12">
                            <div>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12">
                                    <div className='familyPictures'>
                                    <img src="https://media.istockphoto.com/photos/dinner-with-friends-group-of-young-people-enjoying-dinner-together-picture-id1173786659?k=6&m=1173786659&s=612x612&w=0&h=jXE8PbjC0Y69V5Zcr2N1o2mzdj_i7E7EIYMEVhlB6cA=" alt="picture" className='familyP1' />
                                    </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className='familyInf'>
                                            <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><BsPeopleFill/></span> Family's Celebrating </p>
                                            <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                                voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                                            <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                            <div className='d-flex justify-content-between '>
                                                <button className='btn btn-success'>Ordering</button>
                                                <button className='btn btnColor'>Inform</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className='familyPictures2'>
                                        <img src="https://pipinpear.com/wp-content/uploads/family-at-restaurant.jpg" alt="picture" className='familyP2' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg-4 col-sm-12">
                            <div className='h-100'>
                                <div className='familyPictures2 '>
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/e4/ee/77/blue-mosque-view-from.jpg" alt="picture" className='familyP2' />
                                </div>
                            </div>
                        </div>  
                       
                    </div>
                </div>
            </section>

            {/* section4 drinks */}
            <section  className={dayNight && "section2" || "section22"} >
                <h1 className='text-center'>Drinks of Turkey</h1>
                <h5 className='text-center'>Turkish cuisine is one of the most varied and richest in the world.</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className='d-flex justify-content-center align-items-center'>
                               <div className='infMeal'>
                                   <p className='fs-3 text-center'>{drink[numberD].name}</p>
                                   <p>{drink[numberD].inf}</p>
                                   <p>font-awsome</p>   
                               </div>
                               
                            </div>
                            <div className='d-flex justify-content-start '>
                                   <Link href='/drink'><button className='btn btnColor'>About</button></Link>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-12">
                        <div>
                            <Swiper navigation={true} className="swiperMeal" onSlideChange={(e)=>setnumberD(e.activeIndex)}>
                            {drink.map((v,i)=>{
                                return <SwiperSlide><div className='mealSwiperImgCard'>
                                    <img src={v.img} alt=""  className='swiperImgMeal'/></div>
                                </SwiperSlide>
                            })}      
                            </Swiper>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>

            {/* secrtion5 yosh oila qurganlar uchun */}
            <section  className={dayNight && "section3" || "section33"}>
                <div className="container">
                   <div className='text-center'>
                   <h1>For new Married</h1>
                    <p>Lorem ipsum dolor sit gnam! Velit ullam totam voluptatum saepe lib nam! Velit ullam totam voluptatum saeero eveniet sit.</p>
                   </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className='familyInf2'>
                                <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span>Marry Me ? </p>
                                <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                    voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                                <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                <div className='d-flex justify-content-between '>
                                    <button className='btn btn-success'>Ordering</button>
                                    <button className='btn btnColor'>Inform</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 ">
                            <div className='familyPictures'>
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/0b/b5/c2/2a/honeymoon-dinner-by-the.jpg" alt="picture" className='familyP1' />
                            </div>
                        </div>


                        <div className="col-lg-6 col-sm-12">
                            <div className='familyPictures'>
                                <img src="http://sunhotelandresort.com/wp-content/uploads/2021/02/honeymoon-dinner.jpg" alt="picture" className='familyP1' />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className='familyInf2'>
                                <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span>Marry Me ?</p>
                                <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                    voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                                <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                <div className='d-flex justify-content-between '>
                                    <button className='btn btn-success'>Ordering</button>
                                    <button className='btn btnColor'>Inform</button>
                                </div>
                            </div>
                        </div>
             
                                <div className="col-lg-3 col-sm-12">
                                    <div className='familyInf2'>
                                            <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span> Marry Me ?  </p>
                                            <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                                voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                                            <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                            <div className='d-flex justify-content-between '>
                                                <button className='btn btn-success'>Ordering</button>
                                                <button className='btn btnColor'>Inform</button>
                                            </div>
                                    </div>
                                </div>
                                    <div className="col-lg-6 col-sm-12">
                                    <div className='familyPictures'>
                                        <video src="video.mp4" controls className='videoTurkey'>
                                        </video>
                                    </div>
                                    </div>
                                    <div className="col-lg-3  col-sm-12">
                                        <div className='familyInf2'>
                                            <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span> Marry Me ? </p>
                                            <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                                voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                                            <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                            <div className='d-flex justify-content-between '>
                                                <button className='btn btn-success'>Ordering</button>
                                                <button className='btn btnColor'>Inform</button>
                                            </div>
                                        </div>
                                    </div>
                                   
                          
                         
                    </div>
                </div>
            </section>
            
            {/* section6 forms */}
            <section   className={dayNight && "section6" || "section66"}>
                <div className="container">
                    <div className='text-center pt-2 pb-3 mb-2'>
                    <h1>Ordering to Restaurant</h1>
                    <h5>We will be happy if You come !</h5>
                    </div>
                    <div className="row">
                    <div className="col-md-6 col-sm-12">
                    <div className='p-2'>
                        <label htmlFor="name" className='form-label'>Your Name</label>
                        <input type="text" className='w-100 form-control mb-4' placeholder='Charlie' id='name'/>

                        <label htmlFor="sureName" className='form-label'>Your Surname</label>
                        <input type="text" className='w-100 form-control  mb-4' placeholder='Puth' id='sureName'/>

                        <div className='mb-3'>
                        </div>
                        
                        <label htmlFor="passport" className='form-label'>Passport ID</label>
                        <input type="text" className='w-100 form-control  mb-4' placeholder='LL2361020' id='passport'/>

                        <label htmlFor="numbers" className='form-label'>Phone Number</label>
                        <input type="text" className='w-100 form-control' placeholder='+8898-(33)-236-56-89' id='numbers'/>
                        
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className='p-2'>
                        <label htmlFor="country" className='form-label'>Your Country</label>
                        <input type="text" className='w-100 form-control  mb-4' placeholder='USA' id='country'/>

                        <label htmlFor="job" className='form-label'>Your Job</label>
                        <input type="text" className='w-100 form-control  mb-4' placeholder='Businessman' id='job'/>

                        <label htmlFor="country" className='form-label'>Old Card number</label>
                        <input type="number" className='w-100 form-control  mb-4' placeholder='4500 6321 4589 3265' id='country'/>
                        <div>
                        </div>

                        <div className='d-flex justify-content-end'>
                        <button className='btn btnColor orderingBtn'>Order</button>
                        </div>


                    </div>
                </div>
                    </div>
                </div>
            </section>
            
        </HomeW>
    )
}

export default Home
