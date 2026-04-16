import styled from "styled-components";

export const ProjectsContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

export const Main = styled.main`
    display: flex;
    flex:1;
    justify-content:space-around;
    align-items:center;
    margin: 0 150px;

    @media (max-width: 750px) {
        flex-direction:column;
        margin:0;
    }
`

export const Section = styled.section`
    display:flex;
    width:50%;
    justify-content: center;
    align-items:center;
    text-align:center;
    gap:10px;
    padding: 2rem;
    
    @media (max-width: 750px) {
        width: 100%;
        flex-direction:column;
    }
`

export const Article = styled.article`
    display:flex;
    flex-direction:column;
    border: 1px solid ${({ theme }) => theme.text};
    width:50%;
    border-radius: 10px;
    padding: 10px 4%;
    gap:1rem;

    @media screen {
        width:100%;
    }

`

export const Aside = styled.aside``

export const Image = styled.img`
    width:70%;
`
export const Title = styled.h2`
    font-size:1rem;
`
export const Paragraf = styled.p`
    font-size:.7rem;
`