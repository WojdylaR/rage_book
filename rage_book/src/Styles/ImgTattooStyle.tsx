import styled from "styled-components";

const ImgTattooStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    .img{
        width: 99%;
        margin-bottom: 3px;
    }

    .img:hover{
        transform: scale(1.2);
        border-radius: 2%;
        border: 3px solid white;
    }
    `

export default ImgTattooStyle