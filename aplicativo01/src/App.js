//#region inicio

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//#endregion fim


import React, { useState } from 'react'
import './App.css'

const App = () => {
  // let mensagem = "Boa noite Daniel!"
  let [mensagem, setMensagem] = useState("Boa noite Daniel")
  return <>
            <div className='container'>{mensagem}</div>
            <button onClick={() => setMensagem("Guaraciaba do Norte")} >Mudar Mensagem</button>
        </>
}

export default App;