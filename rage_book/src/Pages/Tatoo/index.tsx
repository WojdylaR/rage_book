import {ImgTattoo} from "../../Components/Tattoo/ImgLine";
import useWindowSize from "../../Hook/useScreenSize";
import TattooStyle from "../../Styles/TattooStyle";

function Tattoo() {

    const windowsWidth= useWindowSize().width

    return(
        <TattooStyle >
            <ImgTattoo />
            <ImgTattoo n={1}/>
            {windowsWidth && windowsWidth > 1000 ? <ImgTattoo /> :  ""}
        </TattooStyle>
    )
}

export default Tattoo