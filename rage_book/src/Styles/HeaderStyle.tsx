import styled from "styled-components"
import Header from "../Components/Header"

const HeaderStyle = styled.div`
    display: flex;
    font-family: Nunito Sans;
    justify-content: space-between;
    margin-bottom: 50px;
    border-bottom: 1px grey;

    
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
