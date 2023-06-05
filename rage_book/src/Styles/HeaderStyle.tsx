import styled from "styled-components"
import Header from "../Components/Header"

const HeaderStyle = styled.div`
    color: red;
    display: flex;
    font-family: Nunito Sans;
    justify-content: space-between;
    margin-bottom: 70px;
    
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
