import styled from "styled-components";

const ContactStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    .champTxt{
        opacity: 0;
        position: relative;
        width: 100%;
        top: 50px;
        height: 200px;
        outline: none;
        margin-bottom: 100px;
    }

    .champTxt:hover{
        transform: scale(1.01);
    }

    .champTxt:focus{
        transform: scale(1.01);
    }

    .button {
        opacity: 0;
        --color: #757570;
        padding: 0.8em 1.7em;
        background-color: transparent;
        margin-bottom: 50px;
        border-radius: .3em;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: .5s;
        font-weight: 400;
        font-size: 17px;
        border: 1px solid;
        font-family: inherit;
        text-transform: uppercase;
        color: var(--color);
        z-index: 1;
        width: 100%;
       }
       
       .button::before, .button::after {
        content: '';
        display: block;
        width: 50px;
        transform: translate(-50%, -50%);
        position: absolute;
        border-radius: 50%;
        z-index: -1;
        background-color: var(--color);
        transition: 1s ease;
       }
       
       .button::before {
        top: -1em;
        left: -1em;
       }
       
       .button::after {
        left: calc(100% + 1em);
        top: calc(100% + 1em);
       }
       
       .button:hover::before, .button:hover::after {
        height: 410px;
        width: 120%;
       }

       .button:hover {
        color: rgb(10, 25, 30);
       }
       
       .button:active {
        filter: brightness(.8);
       }
`

export default ContactStyle