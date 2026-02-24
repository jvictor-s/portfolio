import styled from "styled-components";

export const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    transition: 0.3s;
    margin-left:20px;

     &:hover {
    transform: scale(1.2);
    }
`;