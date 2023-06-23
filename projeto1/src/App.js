import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponet';
import SecondComponent from './components/SecondComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
<<<<<<< HEAD
          Esta é a branch main.
=======
          Esta é a branch learn.
>>>>>>> learn
        </p>
        <SecondComponent /> {/* Componente adicionando ao JSX*/}
       
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprenda React
        </a>
      </header>
    </div>
  );
}

export default App;
