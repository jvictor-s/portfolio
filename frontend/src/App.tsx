//functions 
import { useState } from "react";
import { ThemeProvider } from "styled-components";

//Components
import Global from "./styles/Global";
import Header from "./components/header";

//config
import { light, dark } from "./styles/themes";
import Footer from "./components/footer";


function App() {

  const [darkMode, setDarkMode] = useState(true);

  const toogleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <Header toogleTheme={toogleTheme} darkMode={darkMode}/>
      <Footer/>
      <Global/>
    </ThemeProvider>
  )
}

export default App
