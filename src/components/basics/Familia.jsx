import React, { cloneElement } from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {

    return (
        <div>
            {
                props.children.map((child, i) => {
                    return cloneElement(child,{ ...props, key:i});
                })
            }

            {/* Pegando só uma propriedade (sobrenome)*/}
            {/*<FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}></FamiliaMembro>*/}
            {/* Pegando todas as propriedades pelo props*/}
            {/*<FamiliaMembro nome="Ana" {...props} ></FamiliaMembro>*/}
            {/* Definindo o sobrenome sem pegar nenhuma propriedade*/}
            {/*<FamiliaMembro nome="Gustavo" sobrenome="Silva"></FamiliaMembro>*/}

        </div>
    )
}