import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

import { modificaPontuacao } from '../actions/GameActions';

class BotaoExpressao extends Component {

  render() {
    return(
        <View>
          <TouchableHighlight
            onPress={ () => this.props.modificaPontuacao(this.props.expressao) }
            underlayColor = 'white'
            style={ styles.botaoExpressao }
          >
            <Text style={ styles.texto }>{this.props.expressao}</Text>
          </TouchableHighlight>
        </View>
    )
  }
}

mapStateToProps = state => {
    const pontuacao = state.GameReducer.pontuacao;

    return({
      pontuacao: pontuacao
    })
}

export default connect(mapStateToProps, { modificaPontuacao })(BotaoExpressao);

  const styles = StyleSheet.create({
    botaoExpressao: {
    backgroundColor: '#D3977A',
      height: 70,
      width: 70,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    texto: {
      color: '#FFF',
      fontSize: 30
    }
  })
