import styled from "styled-components"

const ComponentsW=styled.div`
    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: black;
        top: 0;
        right:0;
        position: fixed;
        z-index:100;
        border-radius: 0 0 10px 10px;
        padding: 5px;
       
        ul{
            display: flex;
            margin: 0 !important;
            padding: 0 !important;
            list-style-type: none;
            li{
                padding: 0 10px ;
                a{
                    text-decoration: none;
                    color: #F4B400;
                    &:over{
                        text-decoration: none;
                    }
                }
            }
        }
        img{
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 50%;
        }
    }
    .header2{
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: rgb(2, 75, 2);
        position: fixed !important;
        top: 0;
        right:0;
        z-index:100;
        border-radius: 0 0 10px 10px;
        padding: 5px;
       
        ul{
            display: flex;
            margin: 0 !important;
            padding: 0 !important;
            list-style-type: none;
            li{
                padding: 0 10px ;
                a{
                    text-decoration: none;
                    color: green;
                    &:over{
                        text-decoration: none;
                    }
                }
            }
        }
        img{
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    /* footer */
    .footer{
        box-sizing: border-box;
        background-image: radial-gradient(circle, #252525, #1d1d1d, #161616, #0d0d0d, #000000);
        padding: 10px 30px;
        color: #F4B400;

        a{
            color: #F4B400;
            text-decoration:none;
            margin-right: 10px;
            padding: 5px;
            &:hover{
                text-decoration:none;
                transform: translateY(10px);
            }
        }
        span:hover{
            transform: translateY(10px) !important;
        }
        input{
            border-radius: 5px 12px;
            background-color: #252525 !important;
            color: #F4B400;
        }
    }
    .btnColor{
        background-color: #F4B400 !important;
        border-radius: 5px 10px;
    }
    .btnColor2{
        background-color:  white !important;
        border-radius: 5px 10px;
        color: #006D0E;
    }
    .icons:hover{
        transform: translateY(10px) !important;
    }
    .footer2{
        box-sizing: border-box;
        background-color: rgb(2, 75, 2);
        padding: 10px 30px;
        color: white;
        a{
            color: white;
            text-decoration:none;
            margin-right: 10px;
            padding: 5px;
            &:hover{
                text-decoration:none;
                transform: translateY(10px);
            }
        }
        span:hover{
            transform: translateY(10px) !important;
        }
        input{
            border-radius: 5px 12px;
            background-color: white !important;
            color: green;
        }
    }

`;
export {ComponentsW};