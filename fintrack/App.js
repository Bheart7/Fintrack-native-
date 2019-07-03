import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Home, Stats, Profile, Budget, Dashboard } from './src/components';
import { Income, Input, AddTransactions } from './src/components/screens';
import { CardSection, PickerIcon } from './src/components/common';



export default class App extends Component {
  render(){
    return (

        // <CardSection onPress={() => alert("add transactions to the panel")} iconName="logo-usd" textNote="expense" header="Income" />

        <AddTransactions />
    )
  }
}
