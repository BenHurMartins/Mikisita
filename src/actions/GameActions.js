import { MODIFICA_PONTUACAO,
        MODIFICA_RESULTADO,
        ADICAO,
        SUBTRACAO,
        MULTIPLICACAO,
        DIVISAO,
        NOVO_ALVO,
        MODIFICA_NIVEL,
        MODIFICA_MOVIMENTOS } from './types';

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

export const novoAlvo = nivel => {

  var novoAlvo = Math.floor(((nivel * 1000)*(Math.random())));

  return {
    type: NOVO_ALVO,
    payload: novoAlvo
  }
}

export const aumentaNivel = nivel => {

  nivel = nivel + 1;

  return {
    type: MODIFICA_NIVEL,
    payload: nivel
  }
}

export const aumentaMovimentos = movimentos => {
  var novoMovimentos = movimentos + 1;

  return {
    type: MODIFICA_MOVIMENTOS,
    payload: novoMovimentos
  }
}

export const novaPontuacao = (movimentos, nivel) => {

  var pontuacao = Math.round((nivel * 1000) / movimentos);

  return {
    type: MODIFICA_PONTUACAO,
    payload: pontuacao
  }
}
