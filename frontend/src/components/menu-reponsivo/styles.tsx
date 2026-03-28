import styled from "styled-components";

type ContainerProps = {
  $isVisible: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  border-left: 1px solid ${({ theme }) => theme.text};
  border-radius:20px;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 40vw;
  z-index: 9999;
  top: 0;
  right: 0;
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "100%")});
  transition: transform 0.5s;
  background: ${({ theme }) => theme.background};
  @media (max-width: 750px) {
    width: 70vw;
  }
`;

export const Menu = styled.nav`
  text-align: right;
`;
export const ListUnOrder = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
`;

export const List = styled.li`
  font-size: 1rem;
  padding: 1rem 5%;

  a {
    text-decoration: none;
    transition: 0.3s;
    color: ${({ theme }) => theme.text};
  }

  a:hover {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  margin: 24px 20px 20px 20px;
  display: flex;
  background: none;
  border: none;
  cursor: pointer;
  justify-content: right;
  gap: 10px;
  color: ${({ theme }) => theme.text};

  span {
    font-family: JetBrains Mono;
    font-size: 1rem;
  }
`;