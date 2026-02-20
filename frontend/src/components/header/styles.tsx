import styled from "styled-components";

export const Container = styled.div` 
    height:70px;
    //border-bottom: 0.5px solid ${({theme}) => theme.text};
`;

export const Header = styled.header`
    display:flex;
    height:100%;
    align-items:center;
    justify-content:space-around;
`;

export const Title = styled.h1`
 margin-left:10px;
 font-size: 20px;

 @media (max-width: 720px) {
    display:none;
 }
`

export const Logo = styled.img`
    width:30px;
`;

export const Menu = styled.nav`

`
export const ListUnOrder = styled.ul`
    display:flex;
    list-style:none;
`;

export const List = styled.li`
    font-size:15px;
    margin-right:20px;
`
export const Div = styled.div`
    display:flex;
`;

export const LineDiv = styled.hr`
    border:none;
    height:1px;
    background-color:${({theme}) => theme.text} ;
    width:100%;
    opacity:0.3;
    margin:0 auto;
`
