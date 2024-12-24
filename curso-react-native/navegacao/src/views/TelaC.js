import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {

    var numero = -1
    if(props.route.params && props.route.params.numero)
        numero = props.route.params.numero

    return (
        <TextoCentral corFundo='#9932cd'>
            Tela C - {numero}
        </TextoCentral>
    )
}