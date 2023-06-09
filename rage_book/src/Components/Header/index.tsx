import { useContext, useState } from "react";
import useWindowSize from "../../Hook/useScreenSize"
import { HeaderMobileStyle } from "../../Styles/HeaderMobileStyle";
import HeaderStyle from "../../Styles/HeaderStyle"
import {Link} from "react-router-dom"
import { LanguageContext } from "../../App";
import { gsap } from "gsap";

function Header(){

    const windowWidth = useWindowSize().width;
    const [menuToggle, setMenuToggle] = useState(true)
    const languageContext = useContext(LanguageContext)


        if (windowWidth === undefined || windowWidth >=650){
            return(
                <HeaderStyle>
                    <div className="language">
                        <img className="flag" style={{scale: languageContext.language ==='fr' ? "1.2" : ""}} onClick={languageContext.language === "fr" ? () => {} : languageContext.toggleLanguage} src={require("../../Assets/Logo/flag_fr.png")}></img>
                        <img className="flag" style={{scale: languageContext.language ==='en' ? "1.2" : ""}} onClick={languageContext.language === "en" ? () => {} : languageContext.toggleLanguage} src={require("../../Assets/Logo/flag_uk.png")}></img>
                    </div>
                    <div className="all_link">
                        <Link className="link" id="Service" to="/">Tattoo</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/flash">Flash</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/about">{languageContext.language === "fr" ? "À Propos" : "About"}</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/info">Info</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/contact">Contact</Link>
                    </div>
                    <div className="all_logo">
                        <a href="https://www.instagram.com/rage_tatt/"><img className="logo" alt="insta_logo" src={require("../../Assets/Logo/logo_instagram.png")}></img></a><span style={{color: "#ACACAC"}}>-</span>
                        <a href="https://www.facebook.com/rage.tatt.3"><img className="logo" alt="fb_logo" src={require("../../Assets/Logo/logo_facebook.png")}></img></a><span style={{color: "#ACACAC"}}>-</span>
                        <a href="https://www.tiktok.com/@rage_tatt"><img className="logo" alt="ticktok_logo" src={require("../../Assets/Logo/logo_tiktok.png")}></img></a>
                    </div>
                </HeaderStyle>
        )}  else {
            

            const toggleChange = () =>{
                setMenuToggle(!menuToggle)
                if (!menuToggle){
                    gsap.fromTo(".menu",{left: 0}, {left: -650, duration: 0.5})
                    gsap.fromTo(".link",{left: 0}, {left: -650, duration: 0.2})
                } else if (menuToggle)
                    gsap.fromTo(".menu",{left: -650}, {left:0})
                    gsap.fromTo(".link",{left: -650}, {left: 25, stagger:0.1})
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
                    <div className="language">
                        <img className="flag" style={{scale: languageContext.language ==='fr' ? "1.2" : ""}} onClick={languageContext.language === "fr" ? () => {} : languageContext.toggleLanguage} src={require("../../Assets/Logo/flag_fr.png")}></img>
                        <img className="flag" style={{scale: languageContext.language ==='en' ? "1.2" : ""}} onClick={languageContext.language === "en" ? () => {} : languageContext.toggleLanguage} src={require("../../Assets/Logo/flag_uk.png")}></img>
                    </div>
                    
                   <div className="menu" >
                    <Link onClick={toggleChange} className="link" id="Service" to="/">TATTOO</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/flash">FLASH</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/about">ABOUT</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/info">INFO</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/contact">CONTACT</Link>
                        </div>
                    
                </HeaderMobileStyle>
        )}
}

export default Header