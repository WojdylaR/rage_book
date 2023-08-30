import { createGlobalStyle } from "styled-components";
import useWindowSize from "../Hook/useScreenSize";



interface HeaderInterface{
    windowWidth: any;
}


const GlobalStyle = createGlobalStyle<HeaderInterface>`


body{
    position: relative;
    left: ${(props) => props.windowWidth < 650 ? "0%" : "20%"};
    background: #ffffff;
    font-family: Nunito Sans;
    position: relative;
}

`

export default GlobalStyle