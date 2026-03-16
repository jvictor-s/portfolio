import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.header``;
export const Footer = styled.footer``;

export const Main = styled.main`
    display:flex;
    flex:1;
    justify-content:space-around;
    align-items:center;

    @media (max-width: 750px) {
        flex-direction:column;
    }
`;

export const Title = styled.h1`
    font-size:2.5rem;
`;

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    width:50%;
    margin:0px 20px 0 20px;
`;

export const DivIcons = styled.div``;
