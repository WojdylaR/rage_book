import { useContext, useEffect } from "react";
import AboutStyle from "../../Styles/AboutStyle";
import { LanguageContext } from "../../App";
import { gsap } from "gsap";

export function About(){

    const {language} = useContext(LanguageContext)
    useEffect(() => {
        gsap.to("span", {opacity: 1, delay: 0.15, duration: 0.5})
    },[])
    
    return(
        <span style={{opacity: 0}}>
            {language === "fr" ? 
                <AboutStyle className="txt_about">
                    <p className="p1">
                    <img alt='rage' className="img" src={require(`../../Assets/photo/rage.JPG`)}/>   
                    Tatoueur.euse autodidacte qui s'inspire de l'univers 
                    gothique et de l'horreur, toujours avec une ambiance 
                    mystique et envoûtante.</p>
                    <p>Mon univers est teinté de poupées 
                    sortis d'un imaginiare fantastique d'elfe, de vampire 
                    et d’insecte aussi magnifique qu’horrifique. J’aime 
                    parfois m'adapter à la personnalité de la.le tatoué.e 
                    car rien de plus important pour moi que de s’approprier 
                    son propre tatouage !
                    </p>
                </AboutStyle>
            :
                <AboutStyle>
                    <p className="p1">
                    <img alt='rage' className="img" src={require(`../../Assets/photo/rage.JPG`)}/> 
                    Self-taught tattoo artist with gothic and horror inspirations that reflect a mystic and mesmerizing atmosphere. </p>
                    <p>
                    My world is full of dolls that originate from a fantasy composed of elves, vampires and insects equally gorgeous and horrific. 
                    Sometimes, I like to adapt to the personality of the client because nothing is more important to me than to re-appropriate myself his/her tattoo.</p> 

                </AboutStyle>}</span>
    )
}