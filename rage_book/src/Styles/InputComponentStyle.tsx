import styled from "styled-components";

const InputComponentStyle = styled.div`
    position: relative;
    top 50px;
    width: 35%;
    min-width: 200px;

.input {
    width: 100%;
    position: relative ;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    font-weight: 500;
    font-size: 1;
    color: #757575;
    background-color: white;
    border-left: none;
    border-top: none;
    border-right: none;
    padding: 0.4vw;
    transition: .4s;
    outline: none;
    margin-bottom: 75px;
  }
  
  .input:hover {
    border-color: black;
    transform: scale(1.1);
    color: black;
  }
  
  .input:focus {
    border-color: black;
    transform: scale(1.1);
    color: black;
    border-image-slice: 1;
  }`

export default InputComponentStyle