import {Text,TextP} from './styles';

export interface Fonte{
    texto:string;
    texto2?:string;
}

function Texto({texto='',texto2=''}:Fonte){
    return (
        <>
            <Text>
                {texto}
            </Text>
            <TextP>
                {texto2}
            </TextP>
        </>
    )
}
export default Texto;