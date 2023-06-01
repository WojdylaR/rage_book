import { createGlobalStyle } from "styled-components";
import useWindowSize from "../Hook/useScreenSize";

interface HeaderInterface{
    windowWidth: any;
}


const GlobalStyle = createGlobalStyle<HeaderInterface>`
body{
    width: ${(props) => props.windowWidth < 650 ? "90%" : "50%"};
    position: relative;
    left: ${(props) => props.windowWidth < 650 ? "5%" : "25%"};
    top: 100px;
}
`

export default GlobalStyle