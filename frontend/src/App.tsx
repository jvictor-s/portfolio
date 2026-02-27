//functions 
import { useState } from "react";
import { ThemeProvider } from "styled-components";

//Components
import Global from "./styles/Global";
import Header from "./components/header";

//config
import { light, dark } from "./styles/themes";
import Footer from "./components/footer";

import * as C from "./styles";

function App() {

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
          <C.Title>Olá, seja bem-vind[oa]👋</C.Title>
          <C.Paragraph>Esse é o meu portifolio e laboratorio</C.Paragraph>
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

export default App
