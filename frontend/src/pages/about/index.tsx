//functions
import { useState } from "react";
import { ThemeProvider } from "styled-components";

//Components
import Global from "../../styles/Global";
import Header from "../../components/header";
import Footer from "../../components/footer";

//images
import  ImgAbout from "../../assets/about-bitmap.png";

//config
import { light, dark } from "../../styles/themes";

import * as C from "./styles";

function About() {
  const [darkMode, setDarkMode] = useState(true);

  const toogleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
  <C.AboutContainer>
    <ThemeProvider theme={darkMode ? dark : light}>

      <Header toogleTheme={toogleTheme} darkMode={darkMode} />
    
      <C.Main>
          <C.Section>
            <C.Image src={ImgAbout} alt="Minha foto" />
          </C.Section>
          <C.Section>
            <C.Title>Fala galera, me chamo João Victor Batista,</C.Title>
            <C.Paragraph>
              sou estudante do 5º período do IFPB – Campus Cajazeiras.
              Atualmente, estou me aperfeiçoando na área de desenvolvimento fullstack,
              buscando constantemente evoluir minhas habilidades e acompanhar as tendências do mercado,
              tendo grande interesse em criar soluções completas, desde o front-end até o back-end.
              Além da tecnologia, sou fã de Jogos e Filmes principalmente da categoria de Ficção Científica.
            </C.Paragraph>
          </C.Section>
      </C.Main>

      <Footer />
        
      <Global/>
    </ThemeProvider>
  </C.AboutContainer>
  );
}

export default About;
