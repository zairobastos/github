import Cabecalho from '../../components/header/';
import Perfil from '../../components/perfil';
import { Container, Info } from './styles';
const Home = () => {
    return (
        <Container>
            <Cabecalho />
            <Info>
                <Perfil/>
            </Info>
        </Container>
    )
}

export default Home;