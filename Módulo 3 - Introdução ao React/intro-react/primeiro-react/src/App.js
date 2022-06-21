import logo from './img/labenu.png';
import './App.css';


function App() {
  return (
  <div className="dad">
     <h1>Olá! Eu sou a Labenu!</h1>
   <img src={logo} className="logo-img" alt="Alguma coisa"/>
   <h3>Este é o meu primeiro Site React</h3>
    <button className="btn" onClick={() => alert('Você apertou esse botão')}>Aperte este botão</button>
  </div>
  );
}

export default App;
