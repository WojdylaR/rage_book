
import useWindowSize from "../../Hook/useScreenSize";
import ImgTattooStyle from "../../Styles/ImgTattooStyle";


export function ImgTattoo({n}:any, {gap}:any){

    const windowsWidth = useWindowSize().width;

    return(
        <ImgTattooStyle >
            {[... new Array(windowsWidth && windowsWidth > 650 ? 10 : 16)].map((_, i) => (
                <img src={require(`./../../Assets/Tattoo/tattoo${i + n}.jpeg`)} className="img"/>
                
            ))}
            {windowsWidth && windowsWidth > 650 && n===0 ? <img src={require(`./../../Assets/Tattoo/tattoo31.jpeg`)} className="img"/> : ""}
            {windowsWidth && windowsWidth > 650 && n===10 ? <img src={require(`./../../Assets/Tattoo/tattoo30.jpeg`)} className="img"/> : ""}
        </ImgTattooStyle>
    )
}