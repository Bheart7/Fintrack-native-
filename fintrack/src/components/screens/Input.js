import React, { Component } from 'react';
import { View, Text } from 'react-native';
import InputNumberButton from './InputNumberButton';

const buttons = [
  ['CLEAR', 'DEL', 'OK'],
  [7, 8, 9, '+'],
  [4, 5, 6, 'x'],
  [1, 2, 3, '-'],
  [0, '.', '=', '+']
];
class Input extends Component {
  renderButtons(){
    let layouts = buttons.map((buttonRows, index) => {
      let rowItem = buttonRows.map((buttonItems, buttonIndex) => {
        return <InputNumberButton
                  value={buttonItems}
                  handleOnPress={()=> {}}
                  key={'btn-' + buttonIndex}
                />
      });

      return <View style={styles.inputRow} key={'row-' + index}>{rowItem}</View>
    });

    return layouts
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>0</Text>
        </View>
        <View style={styles.inputContainer}>
          {this.renderButtons()}
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#1E1240'
  },
  inputContainer: {
    flex: 8,
    backgroundColor: '#3D0075'
  },
  resultText: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'right'
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row'
  }
}

export { Input };
