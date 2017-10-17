const INITIAL_STATE = {
  pontuacao: 0,
  resultado: 0,
  adicao: true,
  subtracao: false,
  multiplicacao: false,
  divisao: false,
  alvo: 0,
  nivel: 0,
  movimentos: 0
}

import { MODIFICA_PONTUACAO,
         MODIFICA_RESULTADO,
         ADICAO,
         SUBTRACAO,
         MULTIPLICACAO,
         DIVISAO,
         NOVO_ALVO,
         MODIFICA_NIVEL,
         MODIFICA_MOVIMENTOS } from '../actions/types'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_PONTUACAO:
        return {...state, pontuacao: action.payload}
    case MODIFICA_RESULTADO:
        return {...state, resultado: action.payload}
    case ADICAO:
        return {...state, subtracao: false, multiplicacao: false, divisao: false, adicao: true}
    case SUBTRACAO:
        return {...state, subtracao: true, multiplicacao: false, divisao: false, adicao: false}
    case MULTIPLICACAO:
        return {...state, subtracao: false, multiplicacao: true, divisao: false, adicao: false}
    case DIVISAO:
        return {...state, subtracao: false, multiplicacao: false, divisao: true, adicao: false}
    case NOVO_ALVO:
        return {...state, alvo: action.payload, resultado: 0, movimentos: 0}
    case MODIFICA_NIVEL:
        return {...state, nivel: action.payload}
    case MODIFICA_MOVIMENTOS:
        return {...state, movimentos: action.payload}
    default:
        return state;
  }
}
