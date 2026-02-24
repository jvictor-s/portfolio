import * as C from "./styles"
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa"

function Footer(){
    return(
        <C.Container>
            <C.Footer>
                <C.IconDiv> 
                    <a href="#">{<FaGithub size={20}/>}</a>
                    <a href="#">{<FaLinkedin size={20}/>}</a>
                    <a href="#">{<FaInstagram size={20}/>}</a>
                </C.IconDiv>
                <C.Div>&copy;2026. <strong>jvictor's lab</strong> </C.Div>
                <C.Div><a href="#">v0.0.1</a></C.Div>
            </C.Footer>
        </C.Container>
    )
}

export default Footer;