import { PerfilCard } from "./style";
import FotoPerfil from "../../assets/images/Ellipse 1.png"

const Perfil = ()=>{
    return (
        <PerfilCard>
            <img src={FotoPerfil} alt="Foto do perfil" className="perfil" />
            <div className="info-perfil">
                <h1>Zairo Bastos</h1>
                <h3>zairobastos</h3>
                <p>Desenvolvedor Frontend</p>
            </div>
            <div className="dados">
                <h2>44 <span>Repositórios</span> </h2>
                <h2>0 <span>Projetos</span></h2>
                <h2>9 <span>Stars</span></h2>
            </div>
        </PerfilCard>
    );
}

export default Perfil;