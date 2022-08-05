import "./MyForm.css";
import { useState } from 'react'

const MyForm = ({ user }) => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');

    const handleName = (e) => {
        setName(e.target.value);
    }

    // console.log(name);
    // console.log(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o form");
        console.log(name, email, bio);

        //validação
        //envio

        setName('');
        setEmail('');
        setBio('');
    }

    return (
        <div>
            {/* 5 - envio de form */}
            {/* 1 - Cração form*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        name="name"
                        id=""
                        placeholder="Digite seu nome"
                        onChange={handleName}
                        value={name}
                    />
                </div>
                {/* 2 - Label envolvendo o input */}
                <label>
                    <span>E-mail</span>
                    {/* 4 - Simplificação de manipulação de state */}
                    <input type="email"
                        name="email"
                        placeholder="Digite seu email..."
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                {/* 8 - text area */}
                <label>
                    <span>Bio:</span>
                    <textarea
                        name="bio"
                        placeholder="Digite aqui sua biografia..."
                        onChange={(e) => setBio(e.target.value)}
                        value={bio}>
                    </textarea>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm