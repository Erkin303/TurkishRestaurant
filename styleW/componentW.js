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
        background-color: blue;
    }

`;
export {ComponentsW};