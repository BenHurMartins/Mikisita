import { MODIFICA_PONTUACAO } from './types';

export const modificaPontuacao = pontuacao => {
    return {
        type: MODIFICA_PONTUACAO,
        payload: pontuacao
    }
}
