
import { useEffect, useState } from "react";
import useWindowSize from "../../Hook/useScreenSize";
import ImgTattooStyle from "../../Styles/ImgTattooStyle";
import styled from "styled-components";

function Card(props: any){
    const [isOpen, setIsOpen] = useState(false);
    function toggleOpen (){
        setIsOpen(!isOpen)
    }
    const windowsWidth = useWindowSize().width;

    const nbColumn = windowsWidth && windowsWidth > 650 ? 3 : 2
    const numImg = props.nb - (props.n + props.i * nbColumn)
    console.log(numImg + " " +props.n)
    return(
    <CardTattooStyle className="card">
        {numImg > 0 ? <span>
        <img onClick={toggleOpen} src={require(`./../../Assets/Tattoo/tattoo${numImg}.jpg`)} className="img"/>
        {isOpen ?
        <div className="allPage" onClick={toggleOpen}>
            <div className="cadre" onClick={toggleOpen}>
                <div className="x" onClick={toggleOpen}>X</div>
                <img onClick={toggleOpen} src={require(`./../../Assets/Tattoo/tattoo${numImg}.jpg`)} className="big_img"/>
            </div>
            </div>
        : "" }</span> : ""}
    </CardTattooStyle>)
}


export const CardTattooStyle = styled.div`
     display: flex;
    flex-direction: column;
    width: 100%;`


export function ImgTattoo({n}:any){

    const windowsWidth = useWindowSize().width;
    const nbImg = 44;
       
    return(
        <ImgTattooStyle className="array">
        {}
            {[... new Array(windowsWidth && windowsWidth > 650 ? 15 : 23)].map((_, i) => (
                <Card i={i} n={n} nb={nbImg}/>
            ))}
            
        </ImgTattooStyle>
    )
}