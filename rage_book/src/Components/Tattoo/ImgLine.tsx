
import { useEffect, useState } from "react";
import useWindowSize from "../../Hook/useScreenSize";
import ImgTattooStyle from "../../Styles/ImgTattooStyle";
import { CardTattooStyle } from "../../Styles/TattooStyle";


function Card(props: any){
    const [isOpen, setIsOpen] = useState(false);
    function toggleOpen (){
        setIsOpen(!isOpen)
    }
    return(
    <CardTattooStyle className="card">
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
       
    return(
        <ImgTattooStyle >
        {}
            {[... new Array(windowsWidth && windowsWidth > 650 ? 10 : 16)].map((_, i) => (
                <Card i={i} n={n} />
            ))}
            
        </ImgTattooStyle>
    )
}