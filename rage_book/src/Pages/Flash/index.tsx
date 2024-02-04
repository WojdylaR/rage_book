import { useEffect, useState } from "react"
import { FlashStyle } from "../../Styles/FlashStyle"
import { gsap } from "gsap"
import Tattoo from "../Tatoo";

function Card(props: any){
    const i = props.i;
    const [isOpen, setIsOpen] = useState(false)

    function toggleIsOpen(){
        return (setIsOpen(!isOpen))
    }
    return(
        <div className="flash">
            <img onClick={toggleIsOpen} alt="flash" src={require(`./../../Assets/Flash/flash${i - 1}.jpeg`)} className="img"/>
            {isOpen ?
            <div className="allPage" onClick={toggleIsOpen}>
                <div className="cadre" onClick={toggleIsOpen}>
                    <div className="x" onClick={toggleIsOpen}>X</div>
                    <img onClick={toggleIsOpen} src={require(`./../../Assets/Flash/flash${i - 1}.jpeg`)} className="big_img"/>
                </div>
                </div>
            : ""}
        </div>
    )
}

function Flash(){

    useEffect(() =>{
    gsap.fromTo(".flash", {opacity: 0}, {opacity: 1, stagger: 0.075})},[])

    return(
        <FlashStyle>
            <div className="grid">
                {[... new Array(26)].map((_, i) => (
                <Card i={i}/>
            ))}
            </div>

        </FlashStyle>
    )
}

export default Flash