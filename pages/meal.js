import React from 'react'
import { useSelector } from 'react-redux';
import { HomeW } from '../styleW/HomeW'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { useDispatch } from 'react-redux';
import Link from 'next/link'

import { BsPeopleFill ,BsStarHalf} from "react-icons/bs";
import { AiFillStar ,AiFillHeart,AiOutlineHeart} from "react-icons/ai";
import { FaRegHandPointRight } from "react-icons/fa";
import Modal from './../component/modal'




const Meal = () => {
const dispatch = useDispatch();

    const dayNight = useSelector(state => state.dayNight);
    const like = useSelector(state => state.like);
    const like2 = useSelector(state => state.like2);
    const like3 = useSelector(state => state.like3);
    const like4 = useSelector(state => state.like4);
    const like5 = useSelector(state => state.like5);

    const Ozgartirish2 =(e)=>{
        const action={type:"LIKE", payload:!like};
        return dispatch(action);
    }

    const Ozgartirish3 =(e)=>{
        const action={type:"LIKE2", payload:!like2};
        return dispatch(action);
    }
    const Ozgartirish4 =(e)=>{
        const action={type:"LIKE3", payload:!like3};
        return dispatch(action);
    }
    const Ozgartirish5 =(e)=>{
        const action={type:"LIKE4", payload:!like4};
        return dispatch(action);
    }
     const Ozgartirish6 =(e)=>{
        const action={type:"LIKE5", payload:!like5};
        return dispatch(action);
    }


    return (
        <HomeW>
           <section  className={dayNight && "section3" || "section33"}>
                <div className="container joy">
                   <div className='text-center'>
                   <h1>Delicious Turkish Meal</h1>
                    <p className='pb-4'>Dolor sit gnam! Velit ullam totam voluptatum saepe lib nam! Velit ullam totam voluptatum saeero eveniet sit.</p>
                   </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <div className='familyInf2'>
                                <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span> Turkish Kebab </p>
                                <p className='FamilySm'><FaRegHandPointRight/> If the kids like grilled chicken or meat, a shish kebab is a great choice and healthy to boot. Skewered marinated meat, grilled and served up with Turkish rice, ‘lavas’ flatbread and salad. Take the meat from the skewer and mix it in with the rice for smaller kids, or serve it in a wrap for those on the go – whichever they prefer, it makes a tasty and easy to make lunch or dinner.</p>

                                <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                
                              <div className="text-center  pt-2 pb-2">
                              <button onClick={()=>Ozgartirish2()} className='btn btn-light m-0'>
                                <span className={like && "d-block text-danger fs-4" || "d-none"}><AiFillHeart/></span>
                                <span className={like && "d-none" || "d-block  text-danger fs-4"}><AiOutlineHeart/></span> 
                                </button>
                              </div>
                              

                                <div className='d-flex justify-content-between '>
                                <button className='btn btn-success p-0'><Modal></Modal></button>
                                    <button className='btn btnColor'>Inform</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 ">
                            <div className='familyPictures1'>
                                <img src="meal1.jpg" alt="picture" className='familyP11' />
                            </div>
                        </div>


                        <div className="col-lg-6 col-sm-12 ">
                            <div className='familyPictures'>
                                <img src="meal2.jpg" alt="picture" className='familyP11' />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className='familyInf2'>
                                <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span> Turkish BBQ</p>
                                <p className='FamilySm'><FaRegHandPointRight/> Delicious Turkish food for kids",inf:"With virtual schools and private tutors now the norm, some superyacht guests are opting to cruise for extended periods with their families, and this does put extra pressure on the chef and crew. Kids can be fussy eaters, so what do you cook the little ones in between their lessons and dips in the sea?</p>
                                <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                <div className="text-center  pt-2 pb-2">
                              <button onClick={()=>Ozgartirish3()} className='btn btn-light m-0'>
                                <span className={like2 && "d-block text-danger fs-4" || "d-none"}><AiFillHeart/></span>
                                <span className={like2 && "d-none" || "d-block  text-danger fs-4"}><AiOutlineHeart/></span> 
                                </button>
                              </div>
                                <div className='d-flex justify-content-between '>
                                <button className='btn btn-success p-0'><Modal></Modal></button>
                                    <button className='btn btnColor'>Inform</button>
                                </div>
                            </div>
                        </div>
             
                                <div className="col-lg-6 col-sm-12">
                                    <div className='familyInf2'>
                                            <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span> Delicious Turkish food for kids</p>
                                            <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                                voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                                            <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                            <div className="text-center  pt-2 pb-2">
                                            <button onClick={()=>Ozgartirish4()} className='btn btn-light m-0'>
                                                <span className={like3 && "d-block text-danger fs-4" || "d-none"}><AiFillHeart/></span>
                                                <span className={like3 && "d-none" || "d-block  text-danger fs-4"}><AiOutlineHeart/></span> 
                                                </button>
                                            </div>
                                            <div className='d-flex justify-content-between '>
                                            <button className='btn btn-success p-0'><Modal></Modal></button>
                                                <button className='btn btnColor'>Inform</button>
                                            </div>
                                    </div>
                                </div>
                                    <div className="col-lg-6 col-sm-12">
                                    <div className='familyPictures'>
                                <img src="https://www.360-yachting.com/wp-content/uploads/2020/10/Blog-Featured-Image-900x450-11.jpg" alt="picture" className='familyP11' />
                            </div>
                                    </div> 
                                    <div className="col-lg-6 col-sm-12 ">
                            <div className='familyPictures1'>
                                <img src="https://www.360-yachting.com/wp-content/uploads/2020/10/Blog-Featured-Image-900x450-8-800x400.jpg" alt="picture" className='familyP11' />
                            </div>
                        </div>
                                    <div className="col-lg-6 col-sm-12">
                            <div className='familyInf2'>
                                <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span> BAZLAMA TOST (A Turkish toastie)</p>
                                <p className='FamilySm'><FaRegHandPointRight/> Most kids love a toastie, and Turkish ‘bazlama tost’ is a delicious fluffy-centred twist on the run-of-the-mill grilled sandwich. Bazlama is a flat, round, leavened bread traditionally baked over a wood fire in the villages around Turkey, but most supermarkets and better bakeries sell a version.</p>
                                <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                <div className="text-center  pt-2 pb-2">
                              <button onClick={()=>Ozgartirish5()} className='btn btn-light m-0'>
                                <span className={like4 && "d-block text-danger fs-4" || "d-none"}><AiFillHeart/></span>
                                <span className={like4 && "d-none" || "d-block  text-danger fs-4"}><AiOutlineHeart/></span> 
                                </button>
                              </div>
                                <div className='d-flex justify-content-between '>
                                <button className='btn btn-success p-0'><Modal></Modal></button>
                                    <button className='btn btnColor'>Inform</button>
                                </div>
                            </div>
                        </div>
                       
                         <div className="col-lg-6 col-sm-12">
                            <div className='familyInf2'>
                                <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span> PIDE (Turkish pizza) </p>
                                <p className='FamilySm'><FaRegHandPointRight/> Almost all kids love pizza, and if thin and crispy is a preference, Pide will get a swift thumbs up! Long, thin, boat-shaped pizza dough is topped with all the favourites, or traditionally with either spiced mincemeat (kiyma), or yellow cheese (kasar) and spicy sausage (sucuk). </p>
                                <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                <div className="text-center  pt-2 pb-2">
                              <button onClick={()=>Ozgartirish6()} className='btn btn-light m-0'>
                                <span className={like5 && "d-block text-danger fs-4" || "d-none"}><AiFillHeart/></span>
                                <span className={like5 && "d-none" || "d-block  text-danger fs-4"}><AiOutlineHeart/></span> 
                                </button>
                              </div>
                                <div className='d-flex justify-content-between '>
                                <button className='btn btn-success p-0'><Modal></Modal></button>
                                    <button className='btn btnColor'>Inform</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 ">
                            <div className='familyPictures1'>
                                <img src="https://www.360-yachting.com/wp-content/uploads/2020/10/Blog-Featured-Image-900x450-12-800x400.jpg" alt="picture" className='familyP11' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </HomeW>
    )
}

export default Meal
