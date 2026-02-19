import * as C from "./styles"
import ButtonTheme from "../button";
import ImgLogo from "../../assets/logo.svg";

interface HeaderProps{
    toogleTheme: () => void;
    darkMode:boolean;
} 

function Header ({toogleTheme, darkMode}:HeaderProps){
       return(
        <C.Container>
            <C.Header>
                <C.Div>
                    <C.Logo src={ImgLogo} alt="imagem de teste" />
                    <C.Title>jvictors</C.Title>
                </C.Div>
                
                <C.Div>
                    <C.Menu>
                        <C.ListUnOrder>
                            <C.List>home</C.List>
                            <C.List>sobre</C.List>
                            <C.List>contato</C.List>
                        </C.ListUnOrder>
                    </C.Menu>
                    <ButtonTheme onClick={toogleTheme} darkMode={darkMode}/>
                </C.Div>  
            </C.Header>
        </C.Container>
    )
}

export default Header;