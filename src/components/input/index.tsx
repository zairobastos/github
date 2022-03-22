import {Inputi, Buton, Form} from './style';
export interface Dados{
    tipo: string;
    placeholder: string;
}

function Input({tipo='', placeholder=''}:Dados) {
    return(
        <Form>
            <Inputi type={tipo} placeholder={placeholder}/>
            <Buton>
                Pesquisar
            </Buton>
        </Form>
    )
}
export default Input;