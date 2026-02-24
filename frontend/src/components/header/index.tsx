import * as C from "./styles"
import ButtonTheme from "../button";
import ImgLogo from "../../assets/logo.svg";
import { useState } from "react";
import MenuResponsive from "../menu-reponsivo";
import {RiMenu3Fill} from "react-icons/ri"

interface HeaderProps{
    toogleTheme: () => void;
    darkMode:boolean;
} 

function Header ({toogleTheme, darkMode}:HeaderProps){
    const [menuIsVisible, setMenuIsVisible] = useState(false);
    return(
        <C.Container>
            <C.Header>
                <C.Div>
                    <C.Logo src={ImgLogo} alt="jvictors labs"></C.Logo>
                    <C.Title>jvictor's lab</C.Title>
                    <ButtonTheme onClick={toogleTheme} darkMode={darkMode}/>
                </C.Div>
                
                <C.Div>
                    <C.Paragraph>Menu</C.Paragraph>
                    <RiMenu3Fill size={20} onClick={() => setMenuIsVisible(true)}/>
                    <MenuResponsive menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
                </C.Div>  
            </C.Header>
            <C.LineDiv/>
        </C.Container>
    )
}

export default Header;