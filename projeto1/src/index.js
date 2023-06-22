// import React from  'react'
import ReactDOM from  'react-dom'

import Primeiro from './Componentes/Primeiro'
import BomDia from  './Componentes/BomDia'

//Importar variáveis do arquivo Multiplos.jsx
import Cumprimentar from './Componentes/Multiplos'

//Importar variáveis do arquivo Saudacao.js
import Saudar from './Componentes/Saudacao'

ReactDOM.render(
    <>
        <Cumprimentar.BoaTarde nome="Daniel Alves"/>
        <Cumprimentar.BoaNoite nome='Daniel Araújo'/>
        <hr />
        <Saudar tipo='Boa Madrugada' nome="ouvinte"/>
    </>
    , document.getElementById('root'))

