const TemplateExpressions = () => {

    const name = "Matheus";
    const data = {
        job: "Dev",
        age: 20,
    };


    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job} e possui {data.age} anos!</p>
        </div>
    );
};

export default TemplateExpressions;