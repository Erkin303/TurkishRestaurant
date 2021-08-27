import styled from "styled-components"

const HomeW=styled.div`

    transition: 0.3s;
   
    .section1{
        box-sizing: border-box;
        min-height: 90vh;
        background-image: radial-gradient(circle, #252525, #1d1d1d, #161616, #0d0d0d, #000000);
        padding: 120px 0;
        .bbqPicture{
            width: 350px;
            height: 350px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .section11{
        box-sizing: border-box;
        min-height: 90vh;
        background-color:white;
        padding: 120px 0;
        color: green;
        .bbqPicture{
            width: 350px;
            height: 350px;
            object-fit: cover;
            border-radius: 50%;
        }
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
    .section22{
        padding: 30px 0;
        color: green;
        box-sizing: border-box;
        min-height: 90vh;
        background-color: white;
       
        .swiperMeal{
            color: green;
            .swiperIn{
                background-color:red;
            }
        }
        .infMeal{
            color: green;
            margin: 50px 15px 15px 15px !important;
            background-color: rgba(26, 63, 26, 0.173);
            padding: 10px;
            border-radius: 15px;
            
            
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
            min-height: 100%;
        
        }
        .familyP1{
            width: 100%;
            height: 94% !important;
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

    .section33{
        padding: 40px 0;
        color: green;
        box-sizing: border-box;
        min-height: 90vh;
        background-image:green;
        .familyInf{
            min-height: 200px;
            background-color: rgba(26, 63, 26, 0.173);
            padding: 10px;
            margin:10px;
            border-radius: 15px;
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
  
`;
export {HomeW};