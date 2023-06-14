import { useContext } from "react"
import { InfoStyle } from "../../Styles/InfoStyle"
import { LanguageContext } from "../../App"

function Info(){
   
    const {language} = useContext(LanguageContext)
    console.log(language)
    
    return(
        <span>
            {
                language === 'fr' ?
                    <InfoStyle>
                        Info fr
                    </InfoStyle>
                :
                    <InfoStyle>
                        Info En
                    </InfoStyle>
            }
        </span>
    )
}

export default Info