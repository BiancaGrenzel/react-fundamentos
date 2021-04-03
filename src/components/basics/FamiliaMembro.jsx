import React from 'react'

export default props => {

    return(
        <div>
            {/*Criando nome e sobrenome na família*/}
            {props.nome} <strong> {props.sobrenome} </strong>
        </div>
    )
}