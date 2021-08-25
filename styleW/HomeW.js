import styled from "styled-components"

const HomeW=styled.div`
    .section1{
        box-sizing: border-box;
        min-height: 90vh;
        background-image: radial-gradient(circle, #252525, #1d1d1d, #161616, #0d0d0d, #000000);
        padding-top: 70px;
        .bbqPicture{
            width: 350px;
            height: 350px;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    @media screen and (max-width:560px){
        .bbqPicture{
            width: 250px !important;
            height: 250px !important;
        }
    }

    /* section2 */
    .section2{
        padding: 30px 0;
        color: #F4B400;
        box-sizing: border-box;
        min-height: 90vh;
        background-image: radial-gradient(circle, #252525, #1d1d1d, #161616, #0d0d0d, #000000);
       
        .swiperMeal{
            color: #F4B400;
            .swiperIn{
                background-color:red;
            }
        }
        .infMeal{
            color: #F4B400;
            margin: 50px 15px 15px 15px !important;
            
        }
        
        .mealSwiperImgCard{
            display: flex;
            justify-content: center;
            align-items: center !important;
            .swiperImgMeal{
                width: 300px;
                height: 300px;
                object-fit: cover;
                border-radius: 50%;
            }
        }
            
    }
    .btnColor{
        background-color: #F4B400 !important;
    }

    /* section3 */
    .section3{
        padding: 40px 0;
        color: #F4B400;
        box-sizing: border-box;
        min-height: 90vh;
        background-image: radial-gradient(circle, #252525, #1d1d1d, #161616, #0d0d0d, #000000);
        .familyInf{
            min-height: 200px;
            background-color: #363636;
            padding: 10px;
            margin:10px;
            border-radius: 15px;
            .FamilyBig{
                font-size: 17px;
                font-weight: 600;
                border-bottom: 1px solid #F4B400;
            }
            .FamilySm{
                font-size: 14px;
                font-weight: 500;
            }
            .stars{
                text-align: center;

            }
        }
        .familyPictures{
            margin:10px;
            border-radius: 15px;
            height: 100%;
        
        }
        .familyP1{
            width: 100%;
            height: 94%;
            object-fit: cover;
            border-radius: 15px;
        }
        .familyPictures2{
            margin:10px;
            border-radius: 15px;
            height: 100%;
            padding-bottom: 15px;
            margin-bottom: 10px;
        }
        .familyP2{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 15px;
            
        }
    }

    .familyInf2{
        min-height: 200px;
        padding: 10px;
        margin:10px;
        border-radius: 15px;
        .FamilyBig{
            font-size: 17px;
            font-weight: 600;
            border-bottom: 1px solid #F4B400;
        }
        .FamilySm{
            font-size: 14px;
            font-weight: 500;
            }
            .stars{
                text-align: center;

            }
    }
    .videoTurkey{
        width: 100%;
        border-radius: 15px;
        &:hover{
            transition: 0.3s;
            box-shadow: 0 3px 4px 1px #f4b30093 ;
        }
    }

   .inhWords{
    font-size: 40px; 
    font-weight: bold;
    margin:0 ;
    padding: 0;
    color: #F4B400;
   }
   .inhWords2{
    color: #F4B400;
   }

.swiper-container {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}


`;
export {HomeW};