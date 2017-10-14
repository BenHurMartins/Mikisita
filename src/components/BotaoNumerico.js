import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

import { modificaPontuacao } from '../actions/GameActions';

class BotaoNumerico extends Component {

  textoResposta( valor ){

    if (valor > 9999) {
      return(<Text style={ styles.textoGrande }>{this.props.valor}</Text>)
    } else  if (valor > 1000){
      return(<Text style={ styles.textoMedio }>{this.props.valor}</Text>)
    } else {
      return(<Text style={ styles.texto }>{this.props.valor}</Text>)
    }
  }

  render() {
    return(
        <View>
          <TouchableHighlight
            onPress={ () => this.props.modificaPontuacao(this.props.valor) }
            underlayColor = 'white'
            style={ styles.botaoNumerico }
          >
            {this.textoResposta(this.props.valor)}
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

export default connect(mapStateToProps, { modificaPontuacao })(BotaoNumerico);

  const styles = StyleSheet.create({
    botaoNumerico: {
    backgroundColor: '#544438',
      height: 70,
      width: 70,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    texto: {
      color: '#FFF',
      fontSize: 30
    },
    textoGrande: {
      color: '#FFF',
      fontSize: 20
    },
    textoMedio: {
      color: '#FFF',
      fontSize: 25
    }
  })
