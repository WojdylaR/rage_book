import { Children } from "react"
import InputComponentStyle from "../../Styles/InputComponentStyle"
import ContactStyle from "../../Styles/ContactStyle"

const InputComponent = ({tittle}:any) => {
    return(
    <InputComponentStyle >
        <input type="text" name="text" className="input" placeholder={tittle} />
    </InputComponentStyle>
    )
}

function Contact(){
    return(
        <ContactStyle>
            <InputComponent tittle={"Nom"}/>
            <InputComponent tittle={"Mail"}/>
            <InputComponent tittle={"Suject"}/>
            <InputComponent tittle={"Téléphone"}/>
            <textarea className="champTxt" name='user_message'/>
            <button className="button">Envoyer</button>
            
        </ContactStyle>
    )
}

export default Contact