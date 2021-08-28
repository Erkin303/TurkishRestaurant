import styled from "styled-components"

const HomeW=styled.div`

    transition: 0.3s;

    /* section1   */
    .section1and11{
        box-sizing: border-box;
        min-height: 90vh;
        padding: 130px 0;
        .bbqPicture{
            width: 350px;
            height: 350px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .section1{
        background-image: radial-gradient(circle, #252525, #1d1d1d, #161616, #0d0d0d, #000000);
    }

    .section11{
        background-image: url("bg2.jpg");
        background-size: cover;
        color: green;
        .inhWords{
            color: green;
        }
        .inhWords2{
            color: green;
        }
    }


    @media screen and (max-width:560px){
        .bbqPicture{
            width: 250px !important;
            height: 250px !important;
        }
        .swiperImgMeal{
            width: 200px !important;
            height: 200px !important;
        }
        .mealSwiperImgCard{
            margin: 40px 0 0 0 !important;
            padding-bottom: 0 !important;
        }
        .swiperMeal{
            padding:0 !important;
        }
        .infMeal{
            margin-top: 0 !important;
        }
    }

    /* section2 */
    .section2{
        padding: 50px 0;
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
    .section22{
        padding: 50px 0;
        color: green;
        box-sizing: border-box;
        min-height: 90vh;
        background-image: linear-gradient(to left bottom, #34969f, #4fa7ac, #67b9b9, #7ecac7, #95dcd5, #91ded3, #8fe0d0, #8de2cc, #73d4b4, #5cc69a, #47b77f, #36a862);       
        .swiperMeal{
            color: green;
            .swiperIn{
                background-color:red;
            }
        }
        .infMeal{
            color: green;
            margin: 50px 15px 15px 15px !important;
            background-color: #FFFFFF;
            padding: 10px;
            border-radius: 15px;
            box-shadow: 0 5px 8px 5px #4F5E55;
            
            
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
    .familyP111{
            width: 100%;
            min-height: 93% !important;
            object-fit: cover;
            border-radius: 15px;
        }
    .section33{
        padding: 40px 0;
        color: green;
        box-sizing: border-box;
        min-height: 90vh;
        background-color: rgba(26, 63, 26, 0.173);
     

        .familyInf{
            min-height: 200px;
            background-color: white;
            padding: 10px;
            margin:10px;
            border-radius: 15px;
            transition: 0.3s;
            box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.20);
            &:hover{
                box-shadow: 0 10px 25px 10px rgba(0, 0, 0, 0.20);
            
            }
            .FamilyBig{
                font-size: 17px;
                font-weight: 600;
                border-bottom: 1px solid green;
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
            height: 100% !important;
        
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
        .familyInf2{
        min-height: 200px;
        padding: 10px;
        margin:10px;
        border-radius: 15px;
        background-color: white;
        .FamilyBig{
            font-size: 17px;
            font-weight: 600;
            border-bottom: 1px solid green;
        }
        .FamilySm{
            font-size: 14px;
            font-weight: 500;
            }
            .stars{
                text-align: center;

            }
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
        /* section6 */
    .section6{
        padding: 40px 0;
        color: #F4B400;
        box-sizing: border-box;
        min-height: 90vh;
        background-image: radial-gradient(circle, #252525, #1d1d1d, #161616, #0d0d0d, #000000);
        input{
            background-color: #252525 !important;
            color: white;
        }
        input{
        border-radius: 5px 12px;
        }
    }
    .section66{
        padding: 40px 0;
        color: green;
        box-sizing: border-box;
        min-height: 90vh;
        background-color: white;
        input{
        border-radius: 5px 12px;
        }
    }

    .orderingBtn{
        margin-top: 31px;
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
button{
    border-radius: 5px 12px !important;
}

section{
    min-height:50vh !important;
}
.joy{
    padding-top: 70px;
}
.familyP1{
    width: 100%;
    max-height: 250px !important;
    object-fit: cover;
    border-radius: 15px;
}

    .familyP11{
        width: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: 15px;
    }
    .familyPictures1{
        margin:10px;
        border-radius: 15px;
        height: 100%;
    }
    .modalBigacrd1{
        background-color: #2A2A2A;
        border-radius: 10px;
        color: #F4B400;
        padding-bottom: 10px;
        padding: 15px;
        .modalCard{
        border-bottom: 1px solid #F4B400;
        }
    }

    .modalBigacrd2{
        background-color: #D1D1D1;
        border-radius: 10px;
        color: #086000;
        padding-bottom: 10px;
        padding: 15px;
        .modalCard{
        border-bottom: 1px solid #086000;
        }
    }
.bbqP{
    width: 90px;
    height: 90px;
    position: relative;
    animation-name: example;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    z-index: 1;
   
}
.bbqp{
        border-radius: 15px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .bbqP2{
    width: 70px;
    height: 70px;
    position: absolute;
    top: 80px;
    right: 650px;
    animation-name: example2;
    animation-duration: 20s;
    animation-iteration-count: infinite;
    z-index: 1;
   
}

@keyframes example {
    0%   { transform: rotate(0deg)}
  50%   { transform: rotate(180deg)}
  100% { transform: rotate(360deg)}
}
@keyframes example2 {
  0%   { transform: rotate(0deg)}
  50%   { transform: rotate(180deg)}
  100% { transform: rotate(360deg)}
}
  
`;
export {HomeW};