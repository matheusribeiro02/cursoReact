import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: "Matheus", email: "matheus@gmail.com", bio: "Tenho 20 anos, faço Si no IFG..."}} />
    </div>
  );
}

export default App;
