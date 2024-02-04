import { useContext, useEffect, useState } from "react";
import useWindowSize from "../../Hook/useScreenSize"
import styled from "styled-components";
import {Link} from "react-router-dom"
import { LanguageContext } from "../../App";
import { gsap } from "gsap";

function Header(){

    useEffect(()=>
    {gsap.to('.header', {opacity: 1, delay: 0.2, duration: 0.1})},[])

    const windowWidth = useWindowSize().width;
    const [menuToggle, setMenuToggle] = useState(true)
    const languageContext = useContext(LanguageContext)


        if (windowWidth === undefined || windowWidth >=650){
            return(
                <HeaderStyle className="header">
                    <span className="logo"><img alt="logo" className="logoImg" src={require("../../Assets/Logo/logo.jpg")}/></span>
                    <div className="language">
                        <img className="flag" style={{scale: languageContext.language ==='fr' ? "1.2" : ""}} onClick={languageContext.language === "fr" ? () => {} : languageContext.toggleLanguage} src={require("../../Assets/Logo/flag_fr.png")}></img>
                        <img className="flag" style={{scale: languageContext.language ==='en' ? "1.2" : ""}} onClick={languageContext.language === "en" ? () => {} : languageContext.toggleLanguage} src={require("../../Assets/Logo/flag_uk.png")}></img>
                    </div>
                    <div className="all_link">
                        <Link className="link" id="Service" to="/">Tattoo</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/flash">Flash</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/about">{languageContext.language === 'fr' ? "À Propos" : "About"}</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/info   ">Info</Link><span style={{color: "#ACACAC"}}>-</span>
                        <Link className="link" id="Service" to="/contact">Contact</Link>
                    </div>
                    <div className="all_logo">
                        <a href="https://www.instagram.com/rage_tatt/"><img className="logoSocial" alt="insta_logo" src={require("../../Assets/Logo/logo_instagram.png")}></img></a><span style={{color: "#ACACAC"}}>-</span>
                        <a href="https://www.facebook.com/rage.tatt.3"><img className="logoSocial" alt="fb_logo" src={require("../../Assets/Logo/logo_facebook.png")}></img></a><span style={{color: "#ACACAC"}}>-</span>
                        <a href="https://www.tiktok.com/@rage_tatt"><img className="logoSocial" alt="ticktok_logo" src={require("../../Assets/Logo/logo_tiktok.png")}></img></a>
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
                <HeaderMobileStyle className="header">
                    <span className="logo"><img alt="logo" className="logoImg" src={require("../../Assets/Logo/logo.jpg")}/></span>
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
                    <Link onClick={toggleChange} className="link" id="Service" to="/about">{languageContext.language === 'fr' ? "À PROPOS" : "ABOUT"}</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/info">INFO</Link>
                    <Link onClick={toggleChange} className="link" id="Service" to="/contact">CONTACT</Link>
                        </div>
                    
                </HeaderMobileStyle>
        )}
}

export default Header

export const HeaderMobileStyle = styled.div`
    left: 0%;
    z-index: 2;
    margin-bottom: 130px;
    width: 100%;
    .header{
        opacity: 0;
    }

    .link{
        text-decoration: none;
        color: white;
        position: relative;
        left: -650px;
        font-size: 150%;
    }

    .logo{
      position: absolute;
      top: -120px;
      z-index: 2;
      left: 37.5%;
      width: 25%;
      z-index:1;
    }

    .logoImg{
      width: 100%;
      z-index:-1;
    }

    .language{
      position: absolute;
      display: flex;
      flex-direction: column;
      right: 5%;
      top: -90px;
    }

    .flag{
        position: relative;
        transition: 0.25s;
        width: 30px;
    
    }

    .flag:hover{
        scale: 1.2;
        cursor: pointer;
    }

    .menu{
        display:flex;
        flex-direction: column;
        gap: 50px;
        left: -650px;
        z-index: 2;
        position: absolute;
        width: 100%;
        background: rgb(175, 175, 175, 0.95);
        font-family: Bebas Neue;
        letter-spacing : 2px;
        padding-top: 20px;
        padding-bottom: 20px;
    }


    #checkbox {
        display: none;
      }
      
      .toggle {
        position: absolute;
        top: -80px;
        left: 20px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        transition-duration: .3s;
      }
      
      .bars {
        width: 100%;
        height: 4px;
        background-color: #757575;;
        border-radius: 5px;
        transition-duration: .3s;
      }
      
      #checkbox:checked + .toggle .bars {
        margin-left: 13px;
      }
      
      #checkbox:checked + .toggle #bar2 {
        transform: rotate(135deg);
        margin-left: 0;
        transform-origin: center;
        transition-duration: .3s;
      }
      
      #checkbox:checked + .toggle #bar1 {
        transform: rotate(45deg);
        transition-duration: .3s;
        transform-origin: left center;
      }
      
      #checkbox:checked + .toggle #bar3 {
        transform: rotate(-45deg);
        transition-duration: .3s;
        transform-origin: left center;
      }
      
`
const HeaderStyle = styled.div`
    position: relative;
    top: 150px;
    margin-bottom: 150px;
    width: 60%;
    
    .header{
        opacity: 0;
    }

    .menu{
        left: -650px;
        position: relative;
    }

    .language{
        position: absolute;
        top: -85px;
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 100%;
    }

    .logo{
      position: absolute;
      top: -150px;
      z-index: 2;
      left: 45%;
      width: 10%;
      z-index:1;
    }

    .logoImg{
      width: 100%;
      z-index:-1;
    }
    .flag{
        top: -25px;
        position: relative;
        transition: 0.25s;
        width: 30px;
    
    }

    .flag:hover{
        scale: 1.2;
        cursor: pointer;
    }

    .all_link{
        display: flex;
        font-family: Bebas Neue;
        justify-content: space-between;
        margin-bottom: 50px;
        font-size: 125%;
        border-bottom: 1px grey;
        letter-spacing : 2px;}
    
    .link{
        padding: 0 10px 0 10px;
        text-decoration:none;
        color: #757575  ;
        transition: 0.3s cubic-bezier(.19,-0.85,.39,1.85);
        
    }
    .link:hover{
        transform: scale(1.2);
        color: black;
        text-decoration: underline;
    }

    .all_logo{
        display: flex;
        width: 25%;
        left: 37.5%;
        top: -10px;
        margin-bottom: 30px;
        position: relative;
        justify-self: center;
        justify-content: space-between;
        font-size: 100%;
    }

    .logoSocial{
        transition: 1s 0.1s;
        width: 25px;
    }

    .logoSocial:hover{
        rotate: 360deg;
        transform: scale(1.3);
        
    }
`