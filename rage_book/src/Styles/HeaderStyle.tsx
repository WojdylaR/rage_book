import styled from "styled-components"
import Header from "../Components/Header"

const HeaderStyle = styled.div`

    

    .all_link{
        display: flex;
        font-family: Bebas Neue;
        justify-content: space-between;
        margin-bottom: 50px;
        font-size: 125%;
        border-bottom: 1px grey;
        letter-spacing : 2px;}
    
    .link{
        text-decoration:none;
        color: #757575  ;
    }
    .link:hover{
        transform: scale(1.1);
        color: black;
    }

    .all_logo{
        display: flex;
        width: 25%;
        left: 37.5%;
        top: -10px;
        margin-bottom: 30px;
        position: relative;
        justify-self: center;
        justify-content: space-between;
        font-size: 100%;
    }

    .logo{
        width: 25px;
    }
`

export default HeaderStyle
