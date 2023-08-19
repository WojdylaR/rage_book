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

    }
`