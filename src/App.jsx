import React from 'react'

import './App.css'

import ListaAlunos from './components/repeticao/ListaAlunos'
import First from './components/basics/First'
import Fragmento from './components/basics/Fragmento'
import ComParametro from './components/basics/ComParametro'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'

{/*Arrow Function - É uma função que não precisa ter um 
return para funcionar, algo como um retorno implícito*/}
export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className='Cards'>

            <Card titulo="#06 - Repetição" color="#5D6D7E">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#6495ED">
                    {/*Definindo o sobrenome como Ferreira, porém para 
                    isso funcionar precisa-se colocar na Família.jsx, 
                    no sobrenome, como props.sobrenome, assim, puxando esse dado*/}
                    <Familia sobrenome="Ferreira">
                        {/*Criando os membros da família direto dentro da família*/}
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#EA688D">
                    {/*Definindo o valor mínimo e máximo do aleatório*/}
                    <Aleatorio min={10} max={100}></Aleatorio>
                </Card>

                <Card titulo="#03 - Fragmento" color="#84D1A9">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Com Parâmetro" color="#FF7F50">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={7.3} />
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#A5A5DF">
                    <First></First>
                </Card>
            </div>

        </div>
    )
}