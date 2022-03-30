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
                <Perfil/>
                <Dashborder>
                    <Browser/>
                    <Dashboard/>
                </Dashborder>
            </Info>
        </Container>
    )
}

export default Home;