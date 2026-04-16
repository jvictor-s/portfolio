import styled from "styled-components";

export const HomeContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Main = styled.main`
    display:flex;
    flex:1;
    margin:0 150px;
    @media (max-width: 750px) {
        flex-direction:column;
        margin:0;
    }
`;

export const Title = styled.h1`
    font-size:2rem;
`;

export const Subtitle = styled.h2`
    font-size:1.3rem;
    color:#d45500;
`;

export const Paragraph =styled.p`
    font-weight:normal;
    text-align:justify;
`

export const Section = styled.section`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    text-align:center;
    gap:10px;
    width:50%;
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
