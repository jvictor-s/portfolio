import * as C from "./styles"
import ImgLogo from "../../assets/logo-placeholder-image.png"

function Header (){
       return(
        <C.Container>
            <C.Header>
                <C.Logo src={ImgLogo} alt="imagem de teste" />
                <C.Menu>
                    <C.ListUnOrder>
                        <C.List>home</C.List>
                        <C.List>sobre</C.List>
                        <C.List>contato</C.List>
                    </C.ListUnOrder>
                </C.Menu>
            </C.Header>
        </C.Container>
    )
}

export default Header;