import * as C from "./styles"
import type { MouseEventHandler } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    darkMode: boolean;
}

function ButtonTheme ({onClick , darkMode}:Props){
    return(
        <C.Button onClick={onClick}>
            {darkMode ? <FaSun size={15}/> : <FaMoon size={15}/>}
        </C.Button>
    )
}

export default ButtonTheme;