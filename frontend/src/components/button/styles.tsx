import styled from "styled-components";

export const Button = styled.button`
    background-color:${({theme}) => theme.bgButton};
    color:${({theme}) => theme.colorButton};
    font-size:10px;
    border-radius:10px;
    padding:10px;
`;