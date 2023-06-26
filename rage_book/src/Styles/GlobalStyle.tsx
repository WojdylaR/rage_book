import { createGlobalStyle } from "styled-components";
import useWindowSize from "../Hook/useScreenSize";



interface HeaderInterface{
    windowWidth: any;
}


const GlobalStyle = createGlobalStyle<HeaderInterface>`

body{
    width: ${(props) => props.windowWidth < 650 ? "100%" : "60%"};
    position: relative;
    left: ${(props) => props.windowWidth < 650 ? "-1.8%" : "20%"};
    top: 100px;
    font-family: Nunito Sans;
    position: relative;
}

`

export default GlobalStyle