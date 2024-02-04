import { useEffect } from "react";
import {ImgTattoo} from "../../Components/Tattoo/ImgLine";
import useWindowSize from "../../Hook/useScreenSize";
import {gsap} from "gsap"
import styled from "styled-components"
import Flash from "../Flash";

function Tattoo() {

    const windowsWidth= useWindowSize().width
    useEffect(() => {
        gsap.fromTo(".card", {opacity: 0}, {delay:0.2,opacity: 1, stagger: 0.005})},[])
   
    return(
        <TattooStyle >
            <ImgTattoo n={0} key={0}/>
            <ImgTattoo key={1} n={1}/>
            {windowsWidth && windowsWidth > 650 ? <ImgTattoo key={3} n={2}/> : ""}

            <div style={{display: 'none'}}><Flash/></div>
        </TattooStyle>
    )
}

export default Tattoo


const TattooStyle = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    top: 25px;
    .card{
        opacity: 0;
    }
`
