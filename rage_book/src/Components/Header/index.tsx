import { useState } from "react";
import useWindowSize from "../../Hook/useScreenSize"
import { HeaderMobileStyle } from "../../Styles/HeaderMobileStyle";
import HeaderStyle from "../../Styles/HeaderStyle"
import {Link} from "react-router-dom"

function Header(){

    const windowWidth = useWindowSize().width;
    const [menuToggle, setMenuToggle] = useState(true)

        if (windowWidth === undefined || windowWidth >=650){
            return(
                <HeaderStyle>
                    <Link className="link" id="Service" to="/">Tattoo</Link>
                    <Link className="link" id="Service" to="/flash">Flash</Link>
                    <Link className="link" id="Service" to="/about">About</Link>
                    <Link className="link" id="Service" to="/booking">Booking info</Link>
                    <Link className="link" id="Service" to="/contact">Contact</Link>
                </HeaderStyle>
        )}  else {
            
            
            const toggleChange = () =>{
                setMenuToggle(!menuToggle)
            }

            return(
                <HeaderMobileStyle>
                    <input type="checkbox" id="checkbox" onClick={toggleChange}/>
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                    {menuToggle ? "" :<div className="menu" >
                    <Link onClick={toggleChange} className="link" id="Service" to="/">Tattoo</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/flash">Flash</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/about">About</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/booking">Booking</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/contact">Contact</Link>
                        </div>
                    }
                </HeaderMobileStyle>
        )}
}

export default Header