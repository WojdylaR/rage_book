import styled from "styled-components";

export const FlashStyle = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    top: -25px;

    h1{
        justify-self: center;
        margin-bottom: 50px;
    }

    .grid{
        display: grid;
        position: relative;
        width: 99%;
        grid-template-columns: repeat(auto-fill, minmax(250px, 10vw));
        grid-gap: 15px;
        height: auto;
        justify-content: space-around;
        grid-gap: 60px;
        justify-self: center;
    }
    
    .grid_item{
        height: 10vh;
        min-height: 300px;
    }


    .img{
        height: 10vh;
        min-height: 300px;
        cursor: pointer;
    }

    .allPage{
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-color: rgba(20,20,20, 0.5);
        justify-content: center;
    }

    .cadre{
        display: flex;
        position: fixed;
        background-color: white;
        justify-content: space-around;
        align-items: center;
        align-self: center;
        height: 80vh;
        cursor: pointer;
    }
    .big_img{
        position: relative;
        height: 100%;
        z-index: 1;
        cursor: pointer;
    }

`