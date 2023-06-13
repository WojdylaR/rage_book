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
        transition: 0.3s cubic-bezier(.19,-0.85,.39,1.85);
        
    }
    .link:hover{
        transform: scale(1.2);
        color: black;
        text-decoration: underline;
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
        transition: 1s 0.1s;
        width: 25px;
    }

    .logo:hover{
        rotate: 360deg;
        transform: scale(1.3);
        
    }
`

export default HeaderStyle
