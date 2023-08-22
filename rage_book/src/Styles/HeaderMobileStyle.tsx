import styled from "styled-components";

export const HeaderMobileStyle = styled.div`
    left: 0%;
    z-index: 2;
    margin-bottom: 130px;
    width: 100%;
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
