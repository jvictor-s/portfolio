import * as C from "./styles";
import ButtonTheme from "../button";
import { useState } from "react";
import MenuResponsive from "../menu-reponsivo";
import { RiMenuUnfold2Line } from "react-icons/ri";

interface HeaderProps {
  toogleTheme: () => void;
  darkMode: boolean;
}

function Header({ toogleTheme, darkMode }: HeaderProps) {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <>
      <C.Header>
        <C.Div>
          <C.Logo src="/logo.svg" alt="jvictors labs"></C.Logo>
          <C.Title>jvictor's</C.Title>
          <ButtonTheme onClick={toogleTheme} darkMode={darkMode} />
        </C.Div>

        <C.Div>
          <C.IconMenu>
            <C.Button onClick={() => setMenuIsVisible(true)}>
              <span>Menu</span>
              <RiMenuUnfold2Line title="menu" aria-label="menu" size={25}/>
            </C.Button>
            
          </C.IconMenu>
          <MenuResponsive
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
      </C.Div>
    </C.Header>
      <C.LineDiv></C.LineDiv>
  </>
  );
}

export default Header;
