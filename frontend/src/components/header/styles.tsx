import styled from "styled-components";

export const Container = styled.div` 
    height:100px;
`;

export const Header = styled.header`
    display:flex;
    height:100%;
    align-items:center;
    justify-content:space-between;
`;

export const Title = styled.h1`
 margin-left:10px;
 font-size: 30px;

 @media (max-width: 720px) {
    display:none;
 }
`

export const Logo = styled.img`
    width:30px;
    margin-left:40px;
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