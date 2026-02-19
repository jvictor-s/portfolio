import styled from "styled-components";

export const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin-right:40px;
    color: ${({ theme }) => theme.text};
    transition: 0.3s;

     &:hover {
    transform: scale(1.2);
    }
`;