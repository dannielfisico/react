// import React from  'react'
import ReactDOM from  'react-dom'

import Primeiro from './Componentes/Primeiro'
import BomDia from  './Componentes/BomDia'

//Importar variáveis do arquivo Multiplos.jsx
import Cumprimentar from './Componentes/Multiplos'

ReactDOM.render(
    <>
        <Cumprimentar.BoaTarde nome="Daniel Alves"/>
        <Cumprimentar.BoaNoite nome='Daniel Araújo'/>
    </>
    , document.getElementById('root'))

