import * as C from "./styles"
import { RiMenuFold2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

type Props = {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuResponsive({menuIsVisible,setMenuIsVisible}:Props){
  return (
    <C.Container $isVisible={menuIsVisible}>
      <C.Button onClick={() => setMenuIsVisible(false)}>
        <span>Fechar</span>
        <RiMenuFold2Line size={25}/>
      </C.Button>
      <C.Menu>
            <C.ListUnOrder>
                <C.List><Link to="/">home</Link></C.List>
                <C.List><Link to="/about">sobre</Link></C.List>
                <C.List><Link to="/projetos">projetos</Link></C.List>
                <C.List><Link to="/blog">blog</Link></C.List>
                <C.List><Link to="/lab">lab</Link></C.List>
            </C.ListUnOrder>
      </C.Menu>
      <C.Overlay/>
    </C.Container>
  )
}

export default MenuResponsive;