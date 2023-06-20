import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component, useState } from 'react'

export default function TaskForm() {
    const [newTitle, setNewTitle] = useState();
    const onChangeText = (val)=>{
        setNewTitle(val)
    }
    return (
      <View>
        <TextInput
        style= {styles.input}
        onChangeText={onChangeText}
        value= {newTitle}
        placeholder='Nouvelle tâche'
        />
      </View>
    )
  
}

const styles = StyleSheet.create({
    input : {
        borderColor: "black",
        borderWidth : 1
    }
})