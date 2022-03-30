import { Card, Dashborder } from "./styles";
import star from "../../assets/images/Starts.svg";
import arrow from "../../assets/images/arrow-right.svg";

export default function Dashboard() {
  return (
    <Dashborder>
      <Card>
        <div>
          <h2><span>1</span> gostack-desafio-conceitos-react-native</h2>
          <p className="p">Descrição do repositório</p>
        </div>
        <div className="estrela">
          <div className="user-stars">
            <p>Zairo</p>
            <figure>
              <img src={star} alt="estrela github"/>
              <p>5</p>
            </figure>
          </div>
          <button>
            <img src={arrow} alt="visualizar"/>
          </button>
        </div>
      </Card>
      <Card>
        <div>
          <h2><span>1</span> gostack-desafio-conceitos-react-native</h2>
          <p className="p">Descrição do repositório</p>
        </div>
        <div className="estrela">
          <div className="user-stars">
            <p>Zairo</p>
            <figure>
              <img src={star} alt="estrela github"/>
              <p>5</p>
            </figure>
          </div>
          <button>
            <img src={arrow} alt="visualizar"/>
          </button>
        </div>
      </Card>
      <Card>
        <div>
          <h2><span>1</span> gostack-desafio-conceitos-react-native</h2>
          <p className="p">Descrição do repositório</p>
        </div>
        <div className="estrela">
          <div className="user-stars">
            <p>Zairo</p>
            <figure>
              <img src={star} alt="estrela github"/>
              <p>5</p>
            </figure>
          </div>
          <button>
            <img src={arrow} alt="visualizar"/>
          </button>
        </div>
      </Card>
      <Card>
        <div>
          <h2><span>1</span> gostack-desafio-conceitos-react-native</h2>
          <p className="p">Descrição do repositório</p>
        </div>
        <div className="estrela">
          <div className="user-stars">
            <p>Zairo</p>
            <figure>
              <img src={star} alt="estrela github"/>
              <p>5</p>
            </figure>
          </div>
          <button>
            <img src={arrow} alt="visualizar"/>
          </button>
        </div>
      </Card>
      <Card>
        <div>
          <h2><span>1</span> gostack-desafio-conceitos-react-native</h2>
          <p className="p">Descrição do repositório</p>
        </div>
        <div className="estrela">
          <div className="user-stars">
            <p>Zairo</p>
            <figure>
              <img src={star} alt="estrela github"/>
              <p>5</p>
            </figure>
          </div>
          <button>
            <img src={arrow} alt="visualizar"/>
          </button>
        </div>
      </Card>
      <Card>
        <div>
          <h2><span>1</span> gostack-desafio-conceitos-react-native</h2>
          <p className="p">Descrição do repositório</p>
        </div>
        <div className="estrela">
          <div className="user-stars">
            <p>Zairo</p>
            <figure>
              <img src={star} alt="estrela github"/>
              <p>5</p>
            </figure>
          </div>
          <button>
            <img src={arrow} alt="visualizar"/>
          </button>
        </div>
      </Card>
    </Dashborder>
  );
}