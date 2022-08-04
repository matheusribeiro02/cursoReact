import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 10;

  const redTitle = true;

  return (
    <div className="App">
      {/* css global */}
      <h1 className="titulo" >React com CSS</h1>
      {/* css de componente */}
      <MyComponent />
      {/* INLINE CSS */}
      <p style={{color: "blue", padding: "25px"}} >Este elemento foi estilizado de forma inline</p>
      {/* css inline dinamico */}
      <h2 style={n < 10 ? {color: "red"} : {color: "green"}}>Texto css inline dinamico</h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? "redTitle" : "title"} >Classe dinamica</h2>
      {/* css modules */}
      <Title />
    </div>
  );
}

export default App;
