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


const Drink = () => {
    const dispatch = useDispatch();

    const dayNight = useSelector(state => state.dayNight);
    const like1 = useSelector(state => state.like1);
    const like22 = useSelector(state => state.like22);
    const like33 = useSelector(state => state.like33);
    const like44 = useSelector(state => state.like44);
    const like55 = useSelector(state => state.like55);

    const Ozgartirish2 =(e)=>{
        const action={type:"LIKE1", payload:!like1};
        return dispatch(action);
    }

    const Ozgartirish3 =(e)=>{
        const action={type:"LIKE22", payload:!like22};
        return dispatch(action);
    }
    const Ozgartirish4 =(e)=>{
        const action={type:"LIKE33", payload:!like33};
        return dispatch(action);
    }
    const Ozgartirish5 =(e)=>{
        const action={type:"LIKE44", payload:!like44};
        return dispatch(action);
    }
     const Ozgartirish6 =(e)=>{
        const action={type:"LIKE55", payload:!like55};
        return dispatch(action);
    }


    return (
        <HomeW>
        <section  className={dayNight && "section3" || "section33"}>
             <div className="container joy">
                <div className='text-center'>
                <h1>Wonderful Turkish Drinks</h1>
                 <p className='pb-4'>Dolor sit gnam! Velit ullam totam voluptatum saepe lib nam! Velit ullam totam voluptatum saeero eveniet sit.</p>
                </div>
                 <div className="row">
                     <div className="col-lg-6 col-sm-12">
                         <div className='familyInf2'>
                             <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span> Turkish foods </p>
                             <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                 voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                             <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                             <div className="text-center  pt-2 pb-2">
                              <button onClick={()=>Ozgartirish2()} className='btn btn-light m-0'>
                                <span className={like1 && "d-block text-danger fs-4" || "d-none"}><AiFillHeart/></span>
                                <span className={like1 && "d-none" || "d-block  text-danger fs-4"}><AiOutlineHeart/></span> 
                                </button>
                              </div>
                             <div className='d-flex justify-content-between '>
                                 <button className='btn btn-success'>Ordering</button>
                                 <button className='btn btnColor'>Inform</button>
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-6 col-sm-12 ">
                         <div className='familyPictures1'>
                             <img src="https://cdn.goadventureturkey.com/goturkey/6-must-try-traditional-turkish-drinks-4.jpg" alt="picture" className='familyP11' />
                         </div>
                     </div>


                     <div className="col-lg-6 col-sm-12 ">
                         <div className='familyPictures'>
                             <img src="https://cdn.goadventureturkey.com/goturkey/6-must-try-traditional-turkish-drinks-1.jpg" alt="picture" className='familyP11' />
                         </div>
                     </div>
                     <div className="col-lg-6 col-sm-12">
                         <div className='familyInf2'>
                             <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span>Turkish foods</p>
                             <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                 voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                             <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                             <div className="text-center  pt-2 pb-2">
                              <button onClick={()=>Ozgartirish3()} className='btn btn-light m-0'>
                                <span className={like22 && "d-block text-danger fs-4" || "d-none"}><AiFillHeart/></span>
                                <span className={like22 && "d-none" || "d-block  text-danger fs-4"}><AiOutlineHeart/></span> 
                                </button>
                              </div>

                             <div className='d-flex justify-content-between '>
                                 <button className='btn btn-success'>Ordering</button>
                                 <button className='btn btnColor'>Inform</button>
                             </div>
                         </div>
                     </div>
          
                             <div className="col-lg-6 col-sm-12">
                                 <div className='familyInf2'>
                                         <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span>Eat with beautiful landcape !</p>
                                         <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                             voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                                         <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                                          <div className="text-center  pt-2 pb-2">
                                        <button onClick={()=>Ozgartirish4()} className='btn btn-light m-0'>
                                            <span className={like33 && "d-block text-danger fs-4" || "d-none"}><AiFillHeart/></span>
                                            <span className={like33 && "d-none" || "d-block  text-danger fs-4"}><AiOutlineHeart/></span> 
                                            </button>
                                        </div>
                                         <div className='d-flex justify-content-between '>
                                             <button className='btn btn-success'>Ordering</button>
                                             <button className='btn btnColor'>Inform</button>
                                         </div>
                                 </div>
                             </div>
                                 <div className="col-lg-6 col-sm-12">
                                 <div className='familyPictures'>
                                 <img src="https://www.travelinsightpedia.com/wp-content/uploads/2021/05/Turkish-drinks_photo4.jpg" alt="picture" className='familyP11' />
                                   
                                 </div>
                                 </div> 
                                 <div className="col-lg-6 col-sm-12 ">
                         <div className='familyPictures1'>
                             <img src="https://cdn.goadventureturkey.com/goturkey/6-must-try-traditional-turkish-drinks-5.jpg" alt="picture" className='familyP11' />
                         </div>
                     </div>
                                 <div className="col-lg-6 col-sm-12">
                         <div className='familyInf2'>
                             <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span> Turkish foods </p>
                             <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                 voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                             <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                             <div className="text-center  pt-2 pb-2">
                              <button onClick={()=>Ozgartirish5()} className='btn btn-light m-0'>
                                <span className={like44 && "d-block text-danger fs-4" || "d-none"}><AiFillHeart/></span>
                                <span className={like44 && "d-none" || "d-block  text-danger fs-4"}><AiOutlineHeart/></span> 
                                </button>
                              </div>
                             <p className='text-center text-danger'>heart</p>
                             <div className='d-flex justify-content-between '>
                                 <button className='btn btn-success'>Ordering</button>
                                 <button className='btn btnColor'>Inform</button>
                             </div>
                         </div>
                     </div>
                    
                      <div className="col-lg-6 col-sm-12">
                         <div className='familyInf2'>
                             <p className='FamilyBig'><span className='fs-3 m-0 pe-1'><AiFillHeart/></span> Turkish foods </p>
                             <p className='FamilySm'><FaRegHandPointRight/> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores vero tenetur repudiandae, dolore iure, suscipit sapiente libero 
                                 voluptate soluta laboriosam sed! Sunt a corporis autem dolorum ut totam cum quod.</p>
                             <p className='stars'><AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <BsStarHalf/></p>
                             <div className="text-center  pt-2 pb-2">
                              <button onClick={()=>Ozgartirish6()} className='btn btn-light m-0'>
                                <span className={like55 && "d-block text-danger fs-4" || "d-none"}><AiFillHeart/></span>
                                <span className={like55 && "d-none" || "d-block  text-danger fs-4"}><AiOutlineHeart/></span> 
                                </button>
                              </div>
                             <p className='text-center text-danger'>heart</p>
                             <div className='d-flex justify-content-between '>
                                 <button className='btn btn-success'>Ordering</button>
                                 <button className='btn btnColor'>Inform</button>
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-6 col-sm-12 ">
                         <div className='familyPictures1'>
                             <img src="https://cdn.goadventureturkey.com/goturkey/6-must-try-traditional-turkish-drinks-6.jpg" alt="picture" className='familyP11' />
                         </div>
                     </div>

                 </div>
             </div>
         </section>
     </HomeW>
    )
}

export default Drink
