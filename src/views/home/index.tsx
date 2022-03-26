import Browser from '../../components/Browser';
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
                </Dashborder>
            </Info>
        </Container>
    )
}

export default Home;