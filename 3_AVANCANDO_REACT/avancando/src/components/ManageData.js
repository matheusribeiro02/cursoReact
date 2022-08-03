import {useState} from 'react';

const ManageData = () => {
    let someData = 1;

    const [number, setNumber] = useState(15);

    console.log(number);

  return (
    <div>
        <div>
            <p>Valor: {someData} </p>
            <button onClick={() => {someData = 15}}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Agora vai</button>
        </div>
    </div>
  )
}

export default ManageData;