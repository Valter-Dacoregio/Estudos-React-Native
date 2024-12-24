import React from 'react'
import { SafeAreaView, StyleSheet } from "react-native"

import Mega from './components/mega/Mega'
// import FlexBoxV4 from './components/layout/FlexBoxV4'
// import FlexBoxV3 from './components/layout/FlexBoxV3'
// import FlexBoxV2 from './components/layout/FlexBoxV2'
// import FlexBoxV1 from './components/layout/FlexBoxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosv2 from './components/produtos/ListaProdutosv2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar'
// import ContadorV2 from './components/contador.js/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
    <SafeAreaView style={style.App}>
        <Mega qtdeNumeros={12} />
        {/* 
        <FlexBoxV4 />
        <FlexBoxV3 />
        <FlexBoxV2 />
        <FlexBoxV1 />
        <DigiteSeuNome />
        <ListaProdutosv2 />
        <ListaProdutos />
        <UsuarioLogado usuario={ {nome: 'Valter', email: 'valter@mail.com'} } />
        <UsuarioLogado usuario={ {nome: 'Ana' } } />
        <UsuarioLogado usuario={ {email: 'test@mail.com' } } />
        <UsuarioLogado usuario={ {} } />
        <UsuarioLogado usuario={ null } />
        <Familia>
            <Membro nome="Bia" sobrenome="Arruda" />
            <Membro nome="Carlos" sobrenome="Arruda" />
        </Familia>
        <Familia>
            <Membro nome="Ana" sobrenome="Silva" />
            <Membro nome="Júlia" sobrenome="Silva" />
            <Membro nome="Gui" sobrenome="Silva" />
            <Membro nome="Rebeca" sobrenome="Silva" />            
        </Familia>
        <ParImpar num={3} />
        <Diferenciar />
        <ContadorV2 />
        <Pai />
        <Pai />
        <Contador inicial={100} passo={13} />
        <Contador />
        <Botao />
        <Titulo 
            principal="Cadastro Produto"
            secundario="Tela de Cadastro do Produto" />
        <Aleatorio inicio={1} fim={10} />
        <Aleatorio inicio={2} fim={1} />
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> 
        */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        // fontSize: 24
        // backgroundColor: '#A00',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})



//*****************************
// FORMAS DECLARAR FUNÇÃO
//*****************************
// function App() {
//     return <Text>Primeiro Componente</Text>
// }
// export default App

// const App = function () {
//     return <Text>Primeiro Componente!</Text>
// }
// export default App

// export default function () {
//     return <Text>Primeiro Componente 1</Text>
// }

// export default () => {
//     return <Text>Primeiro Componente !!!</Text>
// }

// export default () => <Text>Primeiro Componente</Text>
//*****************************