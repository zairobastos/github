import {Text,TextP,Container} from './styles';

export interface Fonte{
    texto:string;
    texto2?:string;
}

function Texto({texto='',texto2=''}:Fonte){
    return (
        <Container>
            <Text>
                {texto}
            </Text>
            <TextP>
                {texto2}
            </TextP>
        </Container>
    )
}
export default Texto;