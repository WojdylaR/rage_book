import useWindowSize from "../../Hook/useScreenSize"
import HeaderStyle from "../../Styles/HeaderStyle"
import {Link} from "react-router-dom"

function Header(){
    return(
        <HeaderStyle>
            <Link className="link" id="Service" to="/">Home</Link>
            <Link className="link" id="Service" to="/tattoo">Tattoo</Link>
            <Link className="link" id="Service" to="/about">About</Link>
        </HeaderStyle>
    )
}

export default Header