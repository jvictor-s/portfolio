//functions 
import { useState } from "react";
import { ThemeProvider } from "styled-components";

//Components
import Global from "./styles/Global";
import ButtonTheme from "./components/button";
import Header from "./components/header";

//config
import { light, dark } from "./styles/themes";


function App() {

  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Header/>
      <ButtonTheme onClick={() => setDarkMode(!darkMode)} label="Mudar Tema" />
      <Global/>
    </ThemeProvider>
  )
}

export default App
