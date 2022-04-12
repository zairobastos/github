import Input from '../../components/input';
import Texto from '../../components/text';
import Logo from '../../assets/images/Vector.svg'

import {TelaLogin} from './styles';
import React, {useContext} from 'react';
import {Context} from '../../contexts/Context';
function Login() {
    const {username} = useContext(Context);
    return(
        <TelaLogin>
            <header>
                <div className="login">
                    <Texto texto='Github User Finder' texto2="Veja informações de usuário e seus repositórios"/>
                    <Input tipo='text' placeholder="Digite o nome do usuário" valor={username}/>
                </div>
            </header>
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
        </TelaLogin>
    )
}

export default Login;