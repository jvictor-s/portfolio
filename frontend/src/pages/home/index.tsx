//functions 
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BiLogoTypescript, BiLogoReact, BiLogoDocker, BiLogoMongodb, BiLogoNodejs  } from "react-icons/bi"

//Components
import Global from "../../styles/Global";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ParagrafTyped from "../../components/animation/typewrite";

//config
import { light, dark } from "../../styles/themes";

import * as C from "./styles";


function Home(){

const [darkMode, setDarkMode] = useState(true);

  const toogleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <C.Container>
    <ThemeProvider theme={darkMode ? dark : light}>
      <C.Header>
       <Header toogleTheme={toogleTheme} darkMode={darkMode}/>
      </C.Header>


      <C.Main>
        <C.Section>
          <C.Title>Olá, seja muito bem vind[oa] 👋</C.Title>
          <ParagrafTyped/>
        </C.Section>
        <C.Section>
          <C.DivIcons>
            <BiLogoTypescript size={80}/>
            <BiLogoReact size={80}/>
            <BiLogoNodejs size={80}/>
            <BiLogoDocker size={80}/>
            <BiLogoMongodb size={80}/>
          </C.DivIcons>
        </C.Section>
      </C.Main>

      <C.Footer>
        <Footer/>
      </C.Footer>
      <Global/>
    </ThemeProvider>
    </C.Container>
  )

}

export default Home;