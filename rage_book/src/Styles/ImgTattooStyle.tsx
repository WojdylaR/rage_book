import styled from "styled-components";

const ImgTattooStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    opacity: 0;

    .img{
        width: 99%;
        margin-bottom: -2px;
        transition: 0.2s;   
    }

    .img:hover{
        transform: scale(1.2);
        border-radius: 2%;
        border: 3px solid white;
        z-index: 0;
        cursor: pointer;
    }

    .allPage{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(20,20,20, 0.5);
        cursor: pointer;
    }

    .cadre{
        display: flex;
        position: fixed;
        background-color: white;
        justify-content: center;
        align-items: center;
        align-self: center;
        left: 30vw;
        cursor: pointer;
        z-index: 3;
    }
    .big_img{
        position: relative;
        width: 40vw;
        padding: 5px;
        z-index: 1;
        cursor: pointer;
    }

    

    .x{
        position: absolute;
        color: white;
        z-index: 2;
        top: -25px;
        left: -25px;
        transition: 0.5s;
        font-weight: 800;
    }

    .x:hover{
        scale:1.3;
        cursor: pointer;
    }

    @media screen and (max-width: 650px){
        .cadre{
            position: fixed;
            left: 4vw;
        }

        .big_img{
            width: 90vw;
        }

        .x{
            top: -50px;
            left: 0px;
        }

    `

export default ImgTattooStyle