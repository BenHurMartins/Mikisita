import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

import { modificaSinal } from '../actions/GameActions';

class BotaoExpressao extends Component {

  defineBotao(expressao){
    if (this.props.adicao && (expressao == '+')){
       return styles.botaoExpressaoLigado
    } else if (this.props.subtracao && (expressao == '-')){
       return styles.botaoExpressaoLigado
    } else if (this.props.multiplicacao && (expressao == '*')){
       return styles.botaoExpressaoLigado
    } else if (this.props.divisao && (expressao == '/')){
       return styles.botaoExpressaoLigado
    } else {
      return styles.botaoExpressaoDesligado
    }
  }

  render() {
    return(
        <View>
          <TouchableHighlight
            onPress={ () => this.props.modificaSinal(this.props.expressao) }
            underlayColor = 'white'
            style={ this.defineBotao(this.props.expressao) }
          >
            <Text style={ styles.texto }>{this.props.expressao}</Text>
          </TouchableHighlight>
        </View>
    )
  }
}

mapStateToProps = state => {

    return({
      adicao: state.GameReducer.adicao,
      subtracao: state.GameReducer.subtracao,
      multiplicacao: state.GameReducer.multiplicacao,
      divisao: state.GameReducer.divisao,
    })
}

export default connect(mapStateToProps, { modificaSinal })(BotaoExpressao);

  const styles = StyleSheet.create({
    botaoExpressaoDesligado: {
    backgroundColor: '#D3977A',
      height: 70,
      width: 70,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#888',
      shadowOffset: { width: 7, height: 7 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    botaoExpressaoLigado: {
    backgroundColor: '#967158',
      height: 69,
      width: 69,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#888',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
    },
    texto: {
      color: '#FFF',
      fontSize: 30
    }
  })
