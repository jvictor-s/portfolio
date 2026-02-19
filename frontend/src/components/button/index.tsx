import * as C from "./styles"
import type { MouseEventHandler } from "react";

type Props = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    label: string;
}

function ButtonTheme ({onClick, label}:Props){
    return(
        <C.Button onClick={onClick}>{label}</C.Button>
    )
}

export default ButtonTheme;