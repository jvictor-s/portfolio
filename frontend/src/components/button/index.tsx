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
            {darkMode ? <FaSun size={20}/> : <FaMoon size={20}/>}
        </C.Button>
    )
}

export default ButtonTheme;