import {Inputi, Buton, Form} from './style';
import {Link} from 'react-router-dom';
import { useState } from 'react';
export interface Dados{
    tipo: string;
    placeholder: string;
    valor: string;
}

function Input({tipo='', placeholder='', valor=''}:Dados) {

    const [userName, setUserName] = useState(valor);
    return(
        <Form>
            <Inputi type={tipo} placeholder={placeholder} value={userName} onChange={e => setUserName(e.target.value)}/>
            <Link to='/home'><Buton>
                Pesquisar
            </Buton></Link>
        </Form>
    )
}
export default Input;