import ImgLine from "../../Components/Tattoo/ImgLine";
import TattooStyle from "../../Styles/TattooStyle";

function Tattoo() {
    return(
        <TattooStyle >
            <ImgLine />
            <ImgLine n={1}/>
            <ImgLine />
        </TattooStyle>
    )
}

export default Tattoo