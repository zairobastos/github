import Browser from '../../components/Browser';
import Dashboard from '../../components/Dashbord';
import Cabecalho from '../../components/header/';
import Perfil from '../../components/perfil';
import { Container, Info, Dashborder } from './styles';
const Home = () => {
    return (
        <Container>
            <Cabecalho />
            <Info>
                <Perfil nome="Zairo Bastos" nome_user='zairobastos' bio='Desenvolvedor Frontend' project={0} repo={44} stars={9}/>
                <Dashborder>
                    <Browser/>
                    <Dashboard/>
                </Dashborder>
            </Info>
        </Container>
    )
}

export default Home;