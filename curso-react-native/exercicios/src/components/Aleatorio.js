import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo' 

export default (props) => {
    console.warn(props);

    const { inicio, fim } = props
    const diferenca = Math.abs(fim - inicio)
    const menorNumero = inicio < fim ? inicio : fim
    const numeroAleatorio = Math.round(menorNumero + Math.random() * diferenca)

    return(
        <Text style={Estilo.txtG}>
            Número aleatório: {numeroAleatorio}
        </Text>
    )
}