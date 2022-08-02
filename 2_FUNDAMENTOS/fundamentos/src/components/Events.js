const Events = () => {

    const handleMyEvent = (e) => {
        const botao = document.querySelector('.botao');

        botao.style.backgroundColor = "green";
    };

    const renderSomething = (x) => {

        if(x > 10) {
            return <h1>Renderiza isso!!!</h1>
        }else {
            return <h1>Também renderiza isso!!!</h1>
        }
    };

    return (
        <div>
            <div>
                <button className="botao" onClick= {handleMyEvent}>clique aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log('clicou')} >Click here too!</button>
            </div>
            {renderSomething(11)}
        </div>
    );
};

export default Events;