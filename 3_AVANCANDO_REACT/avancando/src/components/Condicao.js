import { useState } from "react";

const Condicao = () => {

    const [x] = useState(true);

    const [name, setName] = useState("Matheus");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim</p>}
            <h1>IF ternário</h1>
            {!x && <p>AGORA X É FALSO</p>}
            {name === "João" ? (
                <div>
                    <p>É o João</p>
                </div>
            ) : (
                <div>
                    <p>Não é o João</p>
                </div>
            )}
            <button onClick={() => setName("João")}>Muda pro Joao</button>
        </div>
    )
}

export default Condicao;