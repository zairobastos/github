import Input from '../../components/input';
import Texto from '../../components/text';

import {TelaLogin} from './styles';
function Login() {
    return(
        <TelaLogin>
            <Texto texto='Github User Finder' texto2="Veja informações de usuário e seus repositórios"/>
            <Input tipo='text' placeholder="Digite o nome do usuário"/>
        </TelaLogin>
    )
}

export default Login;