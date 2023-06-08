import styled from "styled-components"
import Header from "../Components/Header"

const HeaderStyle = styled.div`
    display: flex;
    font-family: Bebas Neue;
    justify-content: space-between;
    margin-bottom: 50px;
    font-size: 125%;
    border-bottom: 1px grey;
    letter-spacing : 2px;
    
    .link{
        text-decoration:none;
        color: #757575  ;
    }
    .link:hover{
        transform: scale(1.1);
        color: black;
    }
`

export default HeaderStyle
