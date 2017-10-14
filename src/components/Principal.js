import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <TouchableHighlight
          onPress={() => Actions.game()}
          style={ styles.botao }
          underlayColor='#AE956C'
        >
            <Text style={ styles.textoBotao }>Jogar</Text>
        </TouchableHighlight>
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
  botao: {
    height: 80,
    width: 200,
    backgroundColor: '#544438',
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBotao: {
    color: 'white',
    alignItems: 'center',
    fontSize: 30
  }
});
