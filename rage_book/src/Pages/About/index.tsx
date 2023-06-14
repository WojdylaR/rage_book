import { useContext } from "react";
import AboutStyle from "../../Styles/AboutStyle";
import { LanguageContext } from "../../App";

export function About(){

    const {language} = useContext(LanguageContext)

    return(
        <span>
            {language === "fr" ? 
                <AboutStyle>
                    A propos
                </AboutStyle>
            :
                <AboutStyle>
                    About
                </AboutStyle>}</span>
    )
}