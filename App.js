/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      todoText: '',
      items: [
        {
          text: 'Some initial todo'
        },
        {
          text: 'another todo'
        }
      ]
    }
  }
  _renderTodo = ({ item }) => (
    <Text>{item.text}</Text>
  )
  _extractKey = (_, index) => index
  _onTextChange = (todoText) => this.setState({ todoText })
  _onAddPressed = () => {
    const items = this.state.items
    items.push({
      text: this.state.todoText
    })
    this.setState({
      items,
      todoText: ''
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 20
        }}>
          <Text style={{ fontSize: 22 }}>Todos</Text>
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.items}
          keyExtractor={this._extractKey}
          renderItem={this._renderTodo} />
        <View style={{ 
            flexDirection: 'row', 
            alignContent: 'center',
            justifyContent: 'center'
          }}>
          <View style={{ flex: 1, flexDirection: 'column'}}>
          <FormLabel>New Todo</FormLabel>
          <FormInput
            onChangeText={this._onTextChange} 
            value={this.state.todoText}
            />
          </View>
          <Button title='Add' onPress={this._onAddPressed} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
