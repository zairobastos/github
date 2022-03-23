import {Inputi, Buton, Form} from './style';
import {Link} from 'react-router-dom';
export interface Dados{
    tipo: string;
    placeholder: string;
}

function Input({tipo='', placeholder=''}:Dados) {
    return(
        <Form>
            <Inputi type={tipo} placeholder={placeholder}/>
            <Link to='/home'><Buton>
                Pesquisar
            </Buton></Link>
        </Form>
    )
}
export default Input;