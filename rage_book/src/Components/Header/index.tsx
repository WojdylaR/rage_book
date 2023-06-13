import { useRef, useState } from "react";
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
                    <div className="all_link">
                        <Link className="link" id="Service" to="/">Tattoo</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/flash">Flash</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/about">About</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/booking">Info</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/contact">Contact</Link>
                    </div>
                    <div className="all_logo">
                        <a href="https://www.instagram.com/rage_tatt/"><img className="logo" alt="insta_logo" src={require("../../Assets/Logo/logo_instagram.png")}></img></a><span style={{color: "#ACACAC"}}>-</span>
                        <a href="youtube.com"><img className="logo" alt="ticktok_logo" src={require("../../Assets/Logo/logo_tiktok.png")}></img></a><span style={{color: "#ACACAC"}}>-</span>
                        <a href="youtube.com"><img className="logo" alt="fb_logo" src={require("../../Assets/Logo/logo_facebook.png")}></img></a>
                    </div>
                </HeaderStyle>
        )}  else {
            
            
            const toggleChange = () =>{
                setMenuToggle(!menuToggle)
            }

            return(
                <HeaderMobileStyle>
                    <img alt="logo" className="logo" src={require("../../Assets/logo.png")}/>
                    <input type="checkbox" id="checkbox" onClick={toggleChange} checked={!menuToggle}/>
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                    {menuToggle ? "" :<div className="menu" >
                    <Link onClick={toggleChange} className="link" id="Service" to="/">Tattoo</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/flash">Flash</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/about">About</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/booking">Info</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/contact">Contact</Link>
                        </div>
                    }
                </HeaderMobileStyle>
        )}
}

export default Header