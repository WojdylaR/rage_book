import styled from "styled-components"
import ReactLoading from "react-loading"
import gsap from "gsap"
import { useEffect } from "react"
import Tattoo from "../Pages/Tatoo"

export default function Loading(){
    useEffect(()=>{
        gsap.to(".newtons-cradle", {opacity: 0, delay: 2.3, duration: 0.2})
    },[])

    return(
        <LoadingStyle>
            <div className="newtons-cradle">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
            </div>
            <div style={{display: 'none'}}><Tattoo/></div>
        </LoadingStyle>
    )
}

const LoadingStyle = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .newtons-cradle {
        opacity: 1;
        --uib-size: 150px;
        --uib-speed: 1.2s;
        --uib-color: #474554;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--uib-size);
        height: var(--uib-size);
}

    .newtons-cradle__dot {
        position: relative;
        display: flex;
        align-items: center;
        height: 100%;
        width: 25%;
        transform-origin: center top;
    }

    .newtons-cradle__dot::after {
        content: '';
        display: block;
        width: 100%;
        height: 25%;
        border-radius: 50%;
        background-color: var(--uib-color);
}

.newtons-cradle__dot:first-child {
 animation: swing var(--uib-speed) linear infinite;
}

.newtons-cradle__dot:last-child {
 animation: swing2 var(--uib-speed) linear infinite;
}

@keyframes swing {
 0% {
  transform: rotate(0deg);
  animation-timing-function: ease-out;
 }

 25% {
  transform: rotate(70deg);
  animation-timing-function: ease-in;
 }

 50% {
  transform: rotate(0deg);
  animation-timing-function: linear;
 }
}

@keyframes swing2 {
 0% {
  transform: rotate(0deg);
  animation-timing-function: linear;
 }

 50% {
  transform: rotate(0deg);
  animation-timing-function: ease-out;
 }

 75% {
  transform: rotate(-70deg);
  animation-timing-function: ease-in;
 }
}
    `