import styled from "styled-components"

const ComponentsW=styled.div`

    .header{
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: black;
        position: fixed !important;
        top: 0;
        right:0;
        z-index:100;
       
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
    }

`;
export {ComponentsW};