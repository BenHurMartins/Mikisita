import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { novoAlvo, aumentaNivel, novaPontuacao } from '../actions/GameActions';

import BotaoNumerico from './BotaoNumerico';
import BotaoExpressao from './BotaoExpressao';

class Game extends Component {

  componentWillMount(){
        this.props.aumentaNivel(this.props.nivel);
        this.props.novoAlvo(1);
  }

  componentWillReceiveProps(newProps) {
    if ((this.props.alvo == newProps.resultado) && (this.props.nivel > 0)) {
        this.props.aumentaNivel(newProps.nivel);
        this.props.novoAlvo(newProps.nivel);
        this.props.novaPontuacao(newProps.movimentos, newProps.nivel)
    }
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={styles.painelPontuacao}>
            <View>
                <View style={ styles.conteinerSuperior }>
                    <Text style={ styles.textoSuperior }>
                        Alvo >> {this.props.alvo}
                    </Text>
                </View>
                <Text style={ styles.textoPrincipal }>Resultado</Text>
                <View style={ styles.conteinerPontuacao }>
                    <Text style={ styles.textoPontuacao }>
                      {this.props.resultado}
                    </Text>
                </View>
            </View>
            <View>
                <View style={ styles.conteinerSuperior }>
                    <Text style={ styles.textoSuperior }>
                        Movimentos >> {this.props.movimentos}
                    </Text>
                </View>
                <Text style={ styles.textoPrincipal }>Pontuação</Text>
                <View style={ styles.conteinerPontuacao }>
                    <Text style={ styles.textoPontuacao }>
                      {this.props.pontuacao}
                    </Text>
                </View>
            </View>
        </View>
        <View style={styles.painelNumeros}>
          <View style={ styles.secaoBotoes }>
            <BotaoNumerico valor={ 1 } />
            <BotaoNumerico valor={ 2 } />
            <BotaoNumerico valor={ 3 } />
            <BotaoNumerico valor={ 5 } />
          </View>
          <View style={ styles.secaoBotoes }>
            <BotaoNumerico valor={ 8 } />
            <BotaoNumerico valor={ 13 } />
            <BotaoNumerico valor={ 21 } />
            <BotaoNumerico valor={ 34 } />
          </View>
          <View style={ styles.secaoBotoes }>
            <BotaoNumerico valor={ 55 } />
            <BotaoNumerico valor={ 89 } />
            <BotaoNumerico valor={ 144 } />
            <BotaoNumerico valor={ 233 } />
          </View>
          <View style={ styles.secaoBotoes }>
            <BotaoExpressao expressao={'+'} />
            <BotaoExpressao expressao={'-'} />
            <BotaoExpressao expressao={'*'} />
            <BotaoExpressao expressao={'/'} />
          </View>
        </View>
        <View style={styles.rodape}>
        </View>
      </View>
    );
  }
}

mapStateToProps = state => {

    return({
      pontuacao: state.GameReducer.pontuacao,
      resultado: state.GameReducer.resultado,
      alvo: state.GameReducer.alvo,
      nivel: state.GameReducer.nivel,
      movimentos: state.GameReducer.movimentos
    })
}

export default connect(mapStateToProps, { novoAlvo, aumentaNivel, novaPontuacao })(Game)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0DEB9',
    paddingTop: 25
  },
  painelPontuacao:{
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  painelNumeros: {
    flex: 3,
    justifyContent: 'space-between'
  },
  rodape: {
    flex: 1,
  },
  secaoBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  conteinerPontuacao:{
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 20,
    width: 150,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  conteinerSuperior: {
    marginBottom: 20
  },
  textoPontuacao: {
    color: '#BC7869',
    fontSize: 25
  },
  textoPrincipal: {
    color: '#FF7869',
    fontSize: 30,
    alignSelf: 'center'
  },
  textoSuperior: {
    color: '#FF7869',
    fontSize: 25,
    alignSelf: 'center'
  }

});
