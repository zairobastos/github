import { Cabecalho } from "./styles";
import Voltar from "../../assets/images/arrow.svg";
import Logo from "../../assets/images/Logo-header.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <Cabecalho>
            <Link to="/"><img src={Voltar} alt="Voltar" className="voltar"/></Link>
            <figure>
                <img src={Logo} alt="Logo" />
                <h2>Github User Finder</h2>
            </figure>
        </Cabecalho>
    )
}
export default Header;