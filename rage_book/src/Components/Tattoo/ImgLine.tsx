
import { useEffect, useState } from "react";
import useWindowSize from "../../Hook/useScreenSize";

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


const ImgTattooStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    opacity: 0c;

    .img{
        width: 99%;
        margin-bottom: -2px;
        transition: 0.2s;   
    }

    .img:hover{
        transform: scale(1.2);
        border-radius: 2%;
        border: 3px solid white;
        z-index: 0;
        cursor: pointer;
    }

    .allPage{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        background-color: rgba(20,20,20, 0.5);
        cursor: pointer;
    }

    .cadre{
        display: flex;
        position: fixed;
        background-color: white;
        justify-content: center;
        align-items: center;
        align-self: center;
        left: 30vw;
        cursor: pointer;
        z-index: 3;
    }
    .big_img{
        position: relative;
        width: 40vw;
        padding: 5px;
        z-index: 1;
        cursor: pointer;
    }

    

    .x{
        position: absolute;
        color: white;
        z-index: 2;
        top: -25px;
        left: -25px;
        transition: 0.5s;
        font-weight: 800;
    }

    .x:hover{
        scale:1.3;
        cursor: pointer;
    }

    @media screen and (max-width: 650px){
        .cadre{
            position: fixed;
            left: 4vw;
        }

        .big_img{
            width: 90vw;
        }

        .x{
            top: -50px;
            left: 0px;
        }}

    `