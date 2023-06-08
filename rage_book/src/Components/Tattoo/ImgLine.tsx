
import ImgTattooStyle from "../../Styles/ImgTattooStyle";


export function ImgTattoo({n}:any, {gap}:any){

    return(
        <ImgTattooStyle >
        {n === 1 ?<img src={require('./../../Assets/tattoo2.png')} className="img"/> : ""}
            {[... new Array(5)].map((_, i) => (
                <img src={require('./../../Assets/tattoo.png')} className="img"/>
            ))}
        </ImgTattooStyle>
    )
}