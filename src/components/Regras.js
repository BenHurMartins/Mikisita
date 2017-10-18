import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
          <Text style={styles.texto}>Você Pontua:</Text>
          <Text style={styles.texto}>- Quando consegue atingir o Alvo</Text>
          <Text style={styles.texto}>Você Perde:</Text>
          <Text style={styles.texto}>-Quando deixa um número negativo</Text>
          <Text style={styles.texto}>-Quando permite que o número quebre em casas decimais</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0DEB9',
  },
  texto: {
    fontSize: 20,
    color: '#544438'
  },
  textoTitulo: {
    fontSize: 25
  }
});
