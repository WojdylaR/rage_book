
import { useEffect, useState } from "react";
import useWindowSize from "../../Hook/useScreenSize";
import ImgTattooStyle from "../../Styles/ImgTattooStyle";
import { CardTattooStyle } from "../../Styles/TattooStyle";


function Card(props: any){
    const [isOpen, setIsOpen] = useState(false);
    function toggleOpen (){
        setIsOpen(!isOpen)
    }
    const numImg = props.nb - (props.n + props.i * 3)
    console.log(numImg + " " +props.n)
    return(
    <CardTattooStyle className="card">
        {numImg ? <span>
        <img onClick={toggleOpen} src={require(`./../../Assets/Tattoo/tattoo${numImg}.jpeg`)} className="img"/>
        {isOpen ?
        <div className="allPage" onClick={toggleOpen}>
            <div className="cadre" onClick={toggleOpen}>
                <div className="x" onClick={toggleOpen}>X</div>
                <img onClick={toggleOpen} src={require(`./../../Assets/Tattoo/tattoo${numImg}.jpeg`)} className="big_img"/>
            </div>
            </div>
        : "" }</span> : ""}
    </CardTattooStyle>)
}

export function ImgTattoo({n}:any){

    const windowsWidth = useWindowSize().width;
    const nbImg = 44;
       
    return(
        <ImgTattooStyle >
        {}
            {[... new Array(windowsWidth && windowsWidth > 650 ? 14 : 21)].map((_, i) => (
                <Card i={i} n={n} nb={nbImg}/>
            ))}
            
        </ImgTattooStyle>
    )
}