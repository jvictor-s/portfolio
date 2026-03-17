import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header``;
export const Footer = styled.footer``;
export const Image = styled.img`
  width: 300px;
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1``;

export const Paragraph = styled.p``;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap:10px;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  width: 50%;
  
  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const DivIcons = styled.div``;
