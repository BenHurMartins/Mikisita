const INITIAL_STATE = {
  pontuacao: 0,
  resultado: 0,
  adicao: true,
  subtracao: false,
  multiplicacao: false,
  divisao: false
}

import { MODIFICA_PONTUACAO,
         MODIFICA_RESULTADO,
         ADICAO,
         SUBTRACAO,
         MULTIPLICACAO,
         DIVISAO } from '../actions/types'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_PONTUACAO:
        return {...state, pontuacao: (action.payload + state.pontuacao)}
    case MODIFICA_RESULTADO:
        return {...state, resultado: action.payload }
    case ADICAO:
        return {...state, subtracao: false, multiplicacao: false, divisao: false, adicao: true}
    case SUBTRACAO:
        return {...state, subtracao: true, multiplicacao: false, divisao: false, adicao: false}
    case MULTIPLICACAO:
        return {...state, subtracao: false, multiplicacao: true, divisao: false, adicao: false}
    case DIVISAO:
        return {...state, subtracao: false, multiplicacao: false, divisao: true, adicao: false}
    default:
        return state;
  }
}
