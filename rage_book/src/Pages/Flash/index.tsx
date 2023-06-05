import {ImgFlash} from "../../Components/Tattoo/ImgLine"
import { FlashStyle } from "../../Styles/FlashStyle"
import ImgLineStyle from "../../Styles/ImgTattooStyle"

function Flash(){
    return(
        <FlashStyle>
            <ImgFlash />
            <ImgFlash />
            <ImgFlash />
        </FlashStyle>
    )
}

export default Flash