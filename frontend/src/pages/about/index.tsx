//functions 
import { useState } from "react";
import { ThemeProvider } from "styled-components";

//Components
import Global from "../../styles/Global";
import Header from "../../components/header";
import Footer from "../../components/footer";

//config
import { light, dark } from "../../styles/themes";

import * as C from "./styles"

function About(){

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
        <C.Div>
          <C.Title>Pagina sobre mim </C.Title>
          <C.Paragraph> um breve resumo sobre mim </C.Paragraph>
        </C.Div>
        <C.Div></C.Div>
      </C.Main>

      <C.Footer>
        <Footer/>
      </C.Footer>
      <Global/>
    </ThemeProvider>
    </C.Container>
  )

}

export default About;