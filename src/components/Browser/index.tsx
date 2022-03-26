import { Menu } from "./styles";
import Pesquisar from "../../assets/images/Group 5681.svg";
import ExibirL from "../../assets/images/Group 5677.svg";
import ExibirB from "../../assets/images/Group 5678.svg";

const Browser = () => {
    return (
        <Menu>
            <div className="form">
                <img src={Pesquisar} alt="Icone pesquisar" className="img-seacher" />
                <input type="text" name="pesquisa" id="pesquisa" className="pesquisa" placeholder="Qual repositório você procura?" />
            </div>
            <div className="options">
                <h2 className="ativo">Mais Recentes</h2>
                <h2 className="desativado">Starts</h2>
                <h2 className="desativado">Linguagens</h2>
            </div>
            <div className="exibicao">
                <button>
                    <img src={ExibirL} alt="Exibição em Linha" />
                </button>
                <button className="bloco">
                    <img src={ExibirB} alt="Exibição em Bloco" />
                </button>
            </div>
        </Menu>
    );
}

export default Browser;