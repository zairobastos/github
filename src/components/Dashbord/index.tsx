import { Card } from "../Card";
import { Dashborder } from "./styles";

export default function Dashboard() {
  return (
    <Dashborder>
      <Card 
        titulo="gostack-desafio-conceitos-react-native" 
        num={1} 
        descricao="Descrição do repositório" 
        nome="Zairo" 
        stars={5}
      />
      <Card 
        titulo="gostack-desafio-conceitos-react-native" 
        num={2} 
        descricao="Descrição do repositório" 
        nome="Zairo" 
        stars={5}
      />
      <Card 
        titulo="gostack-desafio-conceitos-react-native" 
        num={3} 
        descricao="Descrição do repositório" 
        nome="Zairo" 
        stars={5}
      />
      <Card 
        titulo="gostack-desafio-conceitos-react-native" 
        num={4} 
        descricao="Descrição do repositório" 
        nome="Zairo" 
        stars={5}
      />
      <Card 
        titulo="gostack-desafio-conceitos-react-native" 
        num={5} 
        descricao="Descrição do repositório" 
        nome="Zairo" 
        stars={5}
      />
      <Card 
        titulo="gostack-desafio-conceitos-react-native" 
        num={6} 
        descricao="Descrição do repositório" 
        nome="Zairo" 
        stars={5}
      />
    </Dashborder>
  );
}