import './App.css';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Condicao from './components/Condicao';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import CarDetails from './components/CarDetails';
import { useState } from 'react';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App() {
  //const name = "Matheus";
  const [userName] = useState("Magag");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Verde", newCar: true, km: 44430},
    {id: 3, brand: "Fiat", color: "Branco", newCar: false, km: 0},
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="paisagem"/>
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <Condicao />
      {/* PROPS */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="FIAT" km={100000} color="Amarelo" newCar={false} />
      {/* reaproveitar componente */}
      <CarDetails brand="Ford" km={0} color="Verde" newCar={true} />
      <CarDetails brand="VW" km={0} color="Azul" newCar={true} />
      <hr />
      {/* loop em array de objeto */}
      {cars.map ((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/* Fragments */}
      <Fragments />
      {/* children */}
      <Container>
        <p>Conteudo</p>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift / elevar o estado de filho para pai */}
      <Message  msg={message} />
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  );
}

export default App;
