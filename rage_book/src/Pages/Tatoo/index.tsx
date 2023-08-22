import { useEffect } from "react";
import {ImgTattoo} from "../../Components/Tattoo/ImgLine";
import useWindowSize from "../../Hook/useScreenSize";
import TattooStyle from "../../Styles/TattooStyle";
import {gsap} from "gsap"

function Tattoo() {

    const windowsWidth= useWindowSize().width

    useEffect(() =>{
        gsap.fromTo(".array", {opacity: 0, y: -20}, {opacity:1, duration: 0.5, stagger: 0.15, y: 20})})

    return(
        <TattooStyle >
            <ImgTattoo n={0} key={0}/>
            <ImgTattoo key={1} n={1}/>
            {windowsWidth && windowsWidth > 650 ? <ImgTattoo key={3} n={2}/> : ""}
        </TattooStyle>
    )
}

export default Tattoo