import * as C from "./styles"
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

type Props = {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuResponsive({menuIsVisible,setMenuIsVisible}:Props){
  return(
    <C.Container $isVisible={menuIsVisible}>
        <IoClose size={25} onClick={() => setMenuIsVisible(false)}/>
        <C.Menu>
            <C.ListUnOrder>
                <C.List><Link to="/">home</Link></C.List>
                <C.List><Link to="/about">sobre</Link></C.List>
                <C.List><Link to="/">home</Link></C.List>
            </C.ListUnOrder>
        </C.Menu>
    </C.Container>
  )
}

export default MenuResponsive;