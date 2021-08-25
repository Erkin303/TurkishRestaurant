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
        .btnColor{
            background-color: #F4B400 !important;
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
    /* section3 */
    .section3{
        color: #F4B400;
        box-sizing: border-box;
        min-height: 90vh;
        background-image: radial-gradient(circle, #252525, #1d1d1d, #161616, #0d0d0d, #000000);
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