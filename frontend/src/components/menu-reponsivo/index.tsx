import * as C from "./styles"
import { IoClose } from "react-icons/io5";

type Props = {
  menuIsVisible: boolean;
  setMenuIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuResponsive({menuIsVisible,setMenuIsVisible}:Props){
  return(
    <C.Container isVisible={menuIsVisible}>
        <IoClose size={25} onClick={() => setMenuIsVisible(false)}/>
        <C.Menu>
            <C.ListUnOrder>
                <C.List><a href="#">home</a></C.List>
                <C.List><a href="#">sobre</a></C.List>
                <C.List><a href="#">contato</a></C.List>
            </C.ListUnOrder>
        </C.Menu>
    </C.Container>
  )
}

export default MenuResponsive;