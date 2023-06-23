
function FirstComponent(){
   const nome = "Daniel Alves"
   const handleClick = () => {
    alert("Clicou no botão")
    }
     
    return (
        <div>
            <p>Nome: {nome}</p>
            <button onClick={handleClick}>Evento de Click</button>
            
        </div>
    )
}

export default FirstComponent