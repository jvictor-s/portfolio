import styled from "styled-components"

export const Container = styled.div`
    background-color:${({theme}) => theme.background};
`;
export const Footer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:50px;
    width:100%;
    margin-top:10px;
    margin-bottom:10px;

    @media (max-width: 750px) {
        flex-direction: column;
    }
    `;
export const Div = styled.div`
    color:${({theme}) => theme.text};
    font-size:12px;
    
    a{
        text-decoration:none;
        color:${({theme}) => theme.text};
    }
`;

export const IconDiv = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;

    a{
        color:${({theme}) => theme.text};
        margin-right: 5px;
    }
   `;

   export const LineDiv = styled.hr`
       border:none;
       height:1px;
       background-color:${({theme}) => theme.text} ;
       width:100%;
       opacity:0.3;
   `
