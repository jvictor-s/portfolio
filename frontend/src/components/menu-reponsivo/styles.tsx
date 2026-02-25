import styled,{css} from "styled-components";

type ContainerProps = {
  $isVisible: boolean;
};

export const Container = styled.div <ContainerProps>`
    position:absolute;
    height:100%;
    width:100%;
    top:0;
    right:0;
    left:0;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:1;
    background:${({theme}) => theme.background};
    
    opacity:0;
    pointer-events:none;
    transition:1s;

    >svg{
        position:absolute;
        top:1rem;
        right:1rem;
        transform:rotate(45deg);
        transition:1s;
    }

    ${({$isVisible}) => $isVisible && css`
        opacity:1;
        pointer-events:auto;

        >svg{
            transform:rotate(0deg);
            transition:1s;
        }
    `}

`

export const Menu = styled.nav`

`
export const ListUnOrder = styled.ul`
    display:flex;
    list-style:none;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    gap:2rem;
`;

export const List = styled.li`
    font-size:15px;
    margin-right:20px;
    
    a{
        text-decoration:none;
        color:${({theme}) => theme.text};
    }
`