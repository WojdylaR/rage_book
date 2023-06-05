import { ImgFlashStyle } from "../../Styles/FlashStyle";
import ImgTattooStyle from "../../Styles/ImgTattooStyle";


export function ImgTattoo({n}:any, {gap}:any){
    return(
        <ImgTattooStyle >
            {[... new Array(5)].map((_, i) => (
                <img src={require('./../../Assets/tattoo.png')} className="img"/>
            ))}
        </ImgTattooStyle>
    )
}

export function ImgFlash(){
    return(
        <ImgFlashStyle>
            {[... new Array(5)].map((_, i) => (
                <img src={require('./../../Assets/tattoo2.png')} className="img"/>
            ))}
        </ImgFlashStyle>
    )
}