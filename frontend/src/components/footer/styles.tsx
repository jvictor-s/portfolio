import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    background-color:#000000;
    justify-content: center;
`;
export const Footer = styled.footer`
    display:flex;
    justify-content: space-around;
    align-items:center;
    height:50px;
    width:80%;
    margin-top:10px;
    margin-bottom:10px;

    @media (max-width: 750px) {
        flex-direction: column;
    }
    `;
export const Div = styled.div`
    color:#ffffff;
    font-size:12px;
    
    a{
        text-decoration:none;
        color:#ffffff;
    }
`;

export const IconDiv = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;

    a{
        color:#ffffff;
        margin-right: 5px;
    }
   `;
