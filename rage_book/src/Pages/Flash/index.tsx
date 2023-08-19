import { useEffect } from "react"
import { FlashStyle } from "../../Styles/FlashStyle"
import { gsap } from "gsap"



function Flash(){

    useEffect(() =>{
    gsap.fromTo(".img", {opacity: 0}, {opacity:1, duration: 1, stagger: 0.06})})

    return(
        <FlashStyle>
            <h1 className="tittle">Flash dispo :</h1>
            <div className="grid">
                {[... new Array(26)].map((_, i) => (
                <img alt="flash" src={require(`./../../Assets/Flash/flash${i - 1}.jpeg`)} className="img"/>
            ))}
            </div>
        </FlashStyle>
    )
}

export default Flash