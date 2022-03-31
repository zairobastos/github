import { PerfilCard } from "./style";
import FotoPerfil from "../../assets/images/Ellipse 1.png"

interface DadosUser{
    nome: string;
    nome_user: string;
    bio: string;
    repo: number;
    project: number;
    stars: number;
}

const Perfil = ({nome, nome_user, bio, repo, project, stars}: DadosUser)=>{
    return (
        <PerfilCard>
            <img src={FotoPerfil} alt="Foto do perfil" className="perfil" />
            <div className="info-perfil">
                <h1>{nome}</h1>
                <h3>{nome_user}</h3>
                <p>{bio}</p>
            </div>
            <div className="dados">
                <h2>{repo} <span>Repositórios</span> </h2>
                <h2>{project} <span>Projetos</span></h2>
                <h2>{stars} <span>Stars</span></h2>
            </div>
        </PerfilCard>
    );
}

export default Perfil;