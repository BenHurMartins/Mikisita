import { MODIFICA_PONTUACAO,
        MODIFICA_RESULTADO,
        ADICAO,
        SUBTRACAO,
        MULTIPLICACAO,
        DIVISAO } from './types';

export const modificaPontuacao = pontuacao => {
    return {
        type: MODIFICA_PONTUACAO,
        payload: pontuacao
    }
}

export const modificaResultado = resultado => {

  return {
    type: MODIFICA_RESULTADO,
    payload: resultado
  }
}

export const modificaSinal = sinal => {

  if (sinal == '+') {
    return {
      type: ADICAO
    }
  } else if (sinal == '-') {
    return {
      type: SUBTRACAO
    }
  } else if (sinal == '*') {
    return {
      type: MULTIPLICACAO
    }
  } else {
    return {
      type: DIVISAO
    }
  }
}
