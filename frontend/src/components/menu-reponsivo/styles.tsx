import styled, { css } from "styled-components";

type ContainerProps = {
  $isVisible: boolean;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 40vw;
  z-index: 9999;
  top: 0;
  right: 0;
  transition: 0.5s;

  background: ${({ theme }) => theme.background};

  opacity: 0;
  pointer-events: none;

  @media (max-width: 750px) {
    width: 70vw;
  }

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

export const Menu = styled.nav`
  text-align: right;
`;
export const ListUnOrder = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 1rem;
`;

export const List = styled.li`
  font-size: 15px;
  padding: 10px 5%;

  a {
    text-decoration: none;
    transition: 0.3s;
    color: ${({ theme }) => theme.text};
  }

  a:hover {
    font-size: 20px;
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

export const Overlay = styled.div`
  position: fixed;
  z-index: 8888;
  top: 0;
  left: 0;
  width: 60vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);

  @media (max-width: 750px) {
    width: 30vw;
  }
`;
