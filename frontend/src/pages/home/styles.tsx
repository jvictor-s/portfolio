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
    font-size:2.0rem;
`;

export const Subtitle = styled.h2`
    font-size:1rem;
`;

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    text-align:center;
    gap:10px;
    width:50%;
    height: 100%;
    padding: 2rem;
    
    @media (max-width: 750px) {
        width: 100%;
    }
    
    span{
      height: 45px;
    }
`;

export const DivIcons = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
`;
