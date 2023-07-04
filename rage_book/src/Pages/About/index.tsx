import { useContext } from "react";
import AboutStyle from "../../Styles/AboutStyle";
import { LanguageContext } from "../../App";

export function About(){

    const {language} = useContext(LanguageContext)

    return(
        <span>
            {language === "fr" ? 
                <AboutStyle>
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