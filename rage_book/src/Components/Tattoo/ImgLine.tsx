
import { useEffect, useState } from "react";
import useWindowSize from "../../Hook/useScreenSize";
import ImgTattooStyle from "../../Styles/ImgTattooStyle";
import {gsap} from "gsap"
import { CardTattooStyle } from "../../Styles/TattooStyle";


function Card(props: any){
    const [isOpen, setIsOpen] = useState(false);
    function toggleOpen (){
        setIsOpen(!isOpen)
    }
    return(
    <CardTattooStyle>
        <img onClick={toggleOpen} src={require(`./../../Assets/Tattoo/tattoo${props.n + props.i}.jpeg`)} className="img"/>
        {isOpen ?
        <div className="allPage" onClick={toggleOpen}>
            <div className="cadre" onClick={toggleOpen}>
                <div className="x" onClick={toggleOpen}>X</div>
                <img onClick={toggleOpen} src={require(`./../../Assets/Tattoo/tattoo${props.n + props.i}.jpeg`)} className="big_img"/>
            </div>
            </div>
        : ""}
    </CardTattooStyle>)
}

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
                <Card i={i} n={n} />
            ))}
            
        </ImgTattooStyle>
    )
}