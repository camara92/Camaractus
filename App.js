import { Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React, { Component } from 'react';
import TaskScreen from './src/screens/Tasks';

const App = ({children, title })=>{


    return (
      <SafeAreaView style= {styles.SafeContainer}>
        <TaskScreen />
      </SafeAreaView>
    )
  };


const styles = StyleSheet.create({
SafeContainer : {
  // flex:1,
  backgroundColor : "red", 

}
})


export default App; 