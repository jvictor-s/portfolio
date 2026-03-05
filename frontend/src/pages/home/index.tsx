//functions 
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { TbBrandTypescript, TbBrandReact, TbDatabase , TbBrandDocker } from "react-icons/tb";

//Components
import Global from "../../styles/Global";
import Header from "../../components/header";
import Footer from "../../components/footer";

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
        <C.Div>
          <C.Title>Olá, seja bem-vind[oa]👋</C.Title>
          <C.Paragraph>Esse é o meu portifolio e laboratorio</C.Paragraph>
        </C.Div>
        <C.Div>
          <TbBrandTypescript size={50}/>
          <TbBrandReact size={50}/>
          <TbDatabase size={50}/>
          <TbBrandDocker size={50}/>
        </C.Div>
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