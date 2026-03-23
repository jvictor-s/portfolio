import styled from "styled-components";

export const Header = styled.header`
    display:flex;
    height:5rem;
    align-items:center;
    justify-content:space-between;
`;

export const Title = styled.h1`
 margin-left:10px;
 font-size:1.5rem;

 @media (max-width: 720px) {
    display:none;
 }
`

export const Paragraph = styled.p`
    margin-right:10px;
`

export const Logo = styled.img`
    width:30px;
`;

export const Div = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0px 20px 0 20px;
   `;

export const LineDiv = styled.hr`
    border:none;
    height:1px;
    background-color:${({theme}) => theme.text} ;
    width:100%;
    opacity:0.3;
    margin:0 auto;
`

export const IconMenu = styled.div``

export const Button = styled.button`
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  
  span{
    font-family: JetBrains Mono;
    font-size: 1rem;
  }
  
`