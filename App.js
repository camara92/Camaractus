import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react';
import TaskScreen from './src/screens/Tasks';

const App = ({children, title })=>{


    return (
      <View>
        <TaskScreen />
      </View>
    )
  };


const styles = StyleSheet.create({

})


export default App; 