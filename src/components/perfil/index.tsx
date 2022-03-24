import { PerfilCard } from "./style";
import FotoPerfil from "../../assets/images/Ellipse 1.png"

const Perfil = ()=>{
    return (
        <PerfilCard>
            <img src={FotoPerfil} alt="Foto do perfil" className="perfil" />
            <div className="info-perfil">
                <h1>Zairo Bastos</h1>
                <h3>zairobastos</h3>
                <p>Estudante de Ciência da Computação - UFC</p>
            </div>
        </PerfilCard>
    );
}

export default Perfil;