import star from "../../assets/images/Starts.svg";
import arrow from "../../assets/images/arrow-right.svg";
import { Cardi } from "./styles";

interface Dados{
    titulo: string;
    descricao: string;
    nome: string;
    stars: number;
    num: number;
}

export const Card = ({titulo, descricao, nome, stars,num}: Dados) => {
    return (
        <Cardi>
        <div>
          <h2><span>{num}</span> {titulo}</h2>
          <p className="p">{descricao}</p>
        </div>
        <div className="estrela">
          <div className="user-stars">
            <p>{nome}</p>
            <figure>
              <img src={star} alt="estrela github"/>
              <p>{stars}</p>
            </figure>
          </div>
          <button>
            <img src={arrow} alt="visualizar"/>
          </button>
        </div>
      </Cardi>
    );
}