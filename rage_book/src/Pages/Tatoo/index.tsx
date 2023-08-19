import {ImgTattoo} from "../../Components/Tattoo/ImgLine";
import useWindowSize from "../../Hook/useScreenSize";
import TattooStyle from "../../Styles/TattooStyle";
import {gsap} from "gsap"

function Tattoo() {

    const windowsWidth= useWindowSize().width

    return(
        <TattooStyle >
            <ImgTattoo n={0} key={0}/>
            <ImgTattoo key={1} n={windowsWidth && windowsWidth > 650 ? 1 : 16}/>
            {windowsWidth && windowsWidth > 650 ? <ImgTattoo key={3} n={2}/> : ""}
        </TattooStyle>
    )
}

export default Tattoo