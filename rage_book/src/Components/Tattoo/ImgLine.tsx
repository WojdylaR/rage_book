
import { useEffect } from "react";
import useWindowSize from "../../Hook/useScreenSize";
import ImgTattooStyle from "../../Styles/ImgTattooStyle";
import {gsap} from "gsap"

export function ImgTattoo({n}:any, {gap}:any){
    const windowsWidth = useWindowSize().width;

    useEffect(() => {
                        gsap.fromTo(".img",{opacity: 0}, {opacity: 1, duration: 1, stagger:0.02})
                        
                    }
            )
    return(
        <ImgTattooStyle >
        {}
            {[... new Array(windowsWidth && windowsWidth > 650 ? 10 : 16)].map((_, i) => (
                <img src={require(`./../../Assets/Tattoo/tattoo${i + n}.jpeg`)} className="img"/>
            ))}
            
        </ImgTattooStyle>
    )
}