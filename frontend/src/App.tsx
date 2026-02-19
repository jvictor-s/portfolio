//functions 
import { useState } from "react";
import { ThemeProvider } from "styled-components";


//Components
import Global from "./styles/Global";

//config
import { light, dark } from "./styles/themes";
import ButtonTheme from "./components/button";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      
      <h1>Portifolio</h1>
      <ButtonTheme onClick={() => setDarkMode(!darkMode)} label="Mudar Tema"/>
      <Global/> 
    </ThemeProvider>
    
  )
}

export default App
