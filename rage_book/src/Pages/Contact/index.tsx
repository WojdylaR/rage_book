import { Children, useContext, useEffect } from "react"
import InputComponentStyle from "../../Styles/InputComponentStyle"
import ContactStyle from "../../Styles/ContactStyle"
import { gsap } from "gsap"
import { LanguageContext } from "../../App"

const InputComponent = ({tittle}:any) => {
    
    return(
    <InputComponentStyle >
        <input type="text" name="text" className="input" placeholder={tittle} />
    </InputComponentStyle>
    )
}

function Contact(){

    const {language} = useContext(LanguageContext)

    useEffect(() => {
        gsap.fromTo(".input",{opacity: 0}, {opacity: 1, duration: 0.2, stagger:0.05})
        gsap.fromTo(".champTxt",{opacity: 0}, {opacity: 1, duration: 0.2, delay: 0.2})
        gsap.fromTo(".button",{opacity: 0}, {opacity: 1, duration: 0.2, delay: 0.2})
    }
)
    
    return(
        <ContactStyle>
            <InputComponent tittle={language == "fr" ? "Nom" : "Name"}/>
            <InputComponent tittle={"Mail"}/>
            <InputComponent tittle={language == "fr" ? "Sujet" : "Subject"}/>
            <InputComponent tittle={language == "fr" ? "Téléphone" : "Number"}/>
            <textarea className="champTxt" name='user_message'/>
            <button className="button">Envoyer</button>
            
        </ContactStyle>
    )
}

export default Contact