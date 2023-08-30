import styled from "styled-components";

const AboutStyle = styled.div`
    color: #757575;
    position: relative;
    font-size: 150%;
    line-height: 1.5;
    font-family: augusta;
    font-size: 200%;
    top: 20px;
    .img{
        position: relative;
        width: 40%;
        float: left;
        padding:0 50px 5px 0;
    }

    @media screen and (max-width: 650px) {
        position: relative;
        width: 80%;
        left: 10%;
        .img{
            position: relative;
            width: 100%;
            margin-bottom: 25px;
        }
    }
        
    
    `

export default AboutStyle