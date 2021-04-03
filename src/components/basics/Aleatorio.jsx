import React from 'react'

export default props =>{
    {/*Definindo min e max como props*/}
    const { min, max } = props
    {/*Cálculo de sorteio*/}
    const aleatorio = parseInt(Math.random() * (max-min)) + min

    return(
        <div>
            <h2>Número Aleatório:</h2>
            {/*Setando os dados*/}
            <p><strong>Valor Mínimo: </strong>{min}</p>
            <p><strong>Valor Máximo: </strong>{max}</p>
            <p><strong>Valor Escolhido: </strong>{aleatorio}</p>
        </div>
    )
}



