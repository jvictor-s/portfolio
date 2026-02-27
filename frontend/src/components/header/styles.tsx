import styled from "styled-components";

export const Container = styled.div` 
    height:70px;
    //border-bottom: 0.5px solid ${({theme}) => theme.text};
`;

export const Header = styled.header`
    display:flex;
    height:100%;
    align-items:center;
    justify-content:space-between;
`;

export const Title = styled.h1`
 margin-left:10px;
 font-size:25px;

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

export const IconMenu = styled.div`
    @media (min-width: 720px){
        display:none;
    }
`

export const Menu = styled.nav`

`
export const ListUnOrder = styled.ul`
    display:flex;
    list-style:none;
    align-items:center;
    justify-content:center;
    gap:1rem;

    @media (max-width: 720px) {
        display:none;
    }
`;

export const List = styled.li`
    font-size:15px;
    margin-right:20px;
    
    a{
        text-decoration:none;
        color:${({theme}) => theme.text};
    }
`
