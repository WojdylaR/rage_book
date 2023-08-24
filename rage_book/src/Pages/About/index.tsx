import { useContext, useEffect } from "react";
import AboutStyle from "../../Styles/AboutStyle";
import { LanguageContext } from "../../App";
import { gsap } from "gsap";

export function About(){

    const {language} = useContext(LanguageContext)
    useEffect(() => {
        gsap.to("span", {opacity: 1, duration: 0.5})
    })
    
    return(
        <span style={{opacity: 0}}>
            {language === "fr" ? 
                <AboutStyle className="txt_about">
                    Tatoueur.euse autodidacte s'inspire de l'univers 
                    gothique et de l'horreur, toujours avec une ambiance 
                    mystique et envoûtante.<br/>Mon univers est teinté de poupées 
                    sortient d'un imaginiare fantastique d'elfe, de vampire 
                    et d’insecte aussi magnifique qu’horrifique. J’aime 
                    parfois m'adapter à la personnalité de la.le tatoué.e 
                    car rien de plus important pour moi de s’approprier 
                    son propre tatouage !
                </AboutStyle>
            :
                <AboutStyle>
                    About
                </AboutStyle>}</span>
    )
}