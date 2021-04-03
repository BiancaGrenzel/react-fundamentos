import React from 'react'
import './Card.css'

export default props => {

    const cardstyle = {
        /*Definindo as cores pelo props (propriedade) 
        e dizendo que se caso na propriedade não tiver 
        nenhuma cor, a cor irá ser #F00*/
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

    return (
        <div className="Card" style={cardstyle}>
            <div className="Title">{props.titulo}</div>
            {/*Pegando e definindo os dados pela 
            propriedade do filho, que é o cardstyle*/}
            <div className="Content"> {props.children} </div>
        </div>
    )
}