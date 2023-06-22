import React, {Component} from "react";

export default class Saudacao extends Component{
    state = {
        tipo: "Fala",
        nome: "Daniel"
    }

    SetTipo(e){
        this.setState({tipo: e.target.value})
    }

    SetNome(e){
        this.setState({nome: e.target.value})
    }

    render() {
        const {tipo, nome} = this.state
        return (
            <>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo.." value={tipo} />
                <input type="text" placeholder="Nome.." value={nome} />
            </>
        )
    }
}