import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';

import { aumentaMovimentos, modificaResultado } from '../actions/GameActions';

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

  executaExpressao(valor){

    if (this.props.resultado == 0){
        var resultado = (this.props.resultado + this.props.valor)
        this.props.modificaResultado(resultado)
    } else if (this.props.adicao) {
        var resultado = (this.props.resultado + this.props.valor)
        this.props.modificaResultado(resultado)
    } else if (this.props.subtracao) {
        var resultado = (this.props.resultado - this.props.valor)
        this.props.modificaResultado(resultado)
    } else if(this.props.multiplicacao) {
        var resultado = (this.props.resultado * this.props.valor)
        this.props.modificaResultado(resultado)
    }else if(this.props.divisao) {
        var resultado = (this.props.resultado / this.props.valor)
        this.props.modificaResultado(resultado)
    }


  }

  _rotinaDeAcoes() {
      this.executaExpressao(this.props.valor);
      this.props.aumentaMovimentos(this.props.movimentos);
  }

  render() {
    return(
        <View>
          <TouchableHighlight
            onPress={ () => this._rotinaDeAcoes() }
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

    return({
      resultado: state.GameReducer.resultado,
      adicao: state.GameReducer.adicao,
      subtracao: state.GameReducer.subtracao,
      multiplicacao: state.GameReducer.multiplicacao,
      divisao: state.GameReducer.divisao,
      movimentos: state.GameReducer.movimentos
    })
}

export default connect(mapStateToProps, { aumentaMovimentos, modificaResultado })(BotaoNumerico);

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
