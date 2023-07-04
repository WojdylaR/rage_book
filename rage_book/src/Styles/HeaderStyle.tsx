import styled from "styled-components"

const HeaderStyle = styled.div`
    position: relative;
    top: 100px;
    margin-bottom: 100px;
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

    .flag{
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

    .logo{
        transition: 1s 0.1s;
        width: 25px;
    }

    .logo:hover{
        rotate: 360deg;
        transform: scale(1.3);
        
    }
`

export default HeaderStyle
