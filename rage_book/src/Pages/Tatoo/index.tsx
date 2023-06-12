import {ImgTattoo} from "../../Components/Tattoo/ImgLine";
import useWindowSize from "../../Hook/useScreenSize";
import TattooStyle from "../../Styles/TattooStyle";

function Tattoo() {

    const windowsWidth= useWindowSize().width

    return(
        <TattooStyle >
            <ImgTattoo n={0}/>
            <ImgTattoo n={windowsWidth && windowsWidth > 650 ? 10 : 16}/>
            {windowsWidth && windowsWidth > 650 ? <ImgTattoo n={16}/> : ""}
        </TattooStyle>
    )
}

export default Tattoo