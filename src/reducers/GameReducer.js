const INITIAL_STATE = {
  pontuacao: 0,
  numero1: 0,
  numero2: 0,
  resultado: 0,
  expressao: ' ',
  adicao: true,
  subtracao: false,
  multiplicacao: false,
  divisao: false
}

import { MODIFICA_PONTUACAO,
         OBTEM_RESULTADO,
         REALIZA_CONTA } from '../actions/types'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_PONTUACAO:
        return {...state, pontuacao: (action.payload + state.pontuacao)}
    case OBTEM_RESULTADO:
        return state.resultado
    case REALIZA_CONTA:
        if adicao {
          return {...state, resultado: (numero1 + numero2), numero1: numero2, numero2: 0}
        } else if subtracao {
          return {...state, resultado: (numero1 - numero2), numero1: numero2, numero2: 0}
        } else if multiplicacao {
          return {...state, resultado: (numero1 * numero2), numero1: numero2, numero2: 0}
        } else {
          return {...state, resultado: (numero1 / numero2), numero1: numero2, numero2: 0}
        }
    default:
        return state;
  }
}
