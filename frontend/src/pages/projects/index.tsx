//functions
import { useState } from "react";
import { ThemeProvider } from "styled-components";

//configurations
import Global from "../../styles/Global";
import { light, dark } from "../../styles/themes";

//components
import Header from "../../components/header";
import Footer from "../../components/footer";

//images 
import ImgMeuSite from "../../assets/minha-pagina-web.png"

//styles
import * as C from "./styles"

function Projects(){

    const [darkMode, setDarkMode] = useState(true);

    const toogleTheme = () =>{
        setDarkMode(!darkMode);
    };

    return(
    <C.ProjectsContainer>
        <ThemeProvider theme={darkMode ? dark : light}>

            <Header toogleTheme={toogleTheme} darkMode={darkMode}/>

            <C.Main>
                
                <C.Section>Aqui ficaram os projetos!</C.Section>
                <C.Section>
                    <C.Article>
                        <C.Aside>
                            <C.Title>Minha Pagina WEB</C.Title>
                        </C.Aside>
                        <C.Aside>
                            <C.Image src={ImgMeuSite} alt="Imagem do meu site " />
                            <C.Paragraf> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eius vitae cumque atque voluptatum doloremque quas sint, suscipit
                                eligendi veniam soluta porro ex molestias distinctio delectus explicabo 
                                non consequatur. Minima, placeat.
                            </C.Paragraf>
                        </C.Aside>
                    </C.Article>
                    <C.Article>
                        Sistema de permuta 
                    </C.Article>
                </C.Section>
            </C.Main>

            <Footer/>

            <Global/>
         </ThemeProvider>
    </C.ProjectsContainer>
    )
}

export default Projects;