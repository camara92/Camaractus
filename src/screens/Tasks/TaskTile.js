import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import React, { Component } from 'react'

export function TaskTile ({task}) {
  const onchangeStatus = ()=>{
    alert("Voir le status de la tâche ")
  }
  const onDeleteTask = ()=>{
    alert("Supprimer la tâche  ")

  }
    return (
      <View style={styles.container}>

          <Pressable 
          onPress={onchangeStatus}
          style={styles.subContainer}>
        <Image
        style={styles.check}
        source={require('../../../assets/icons/circle.png')}
      />
        <Text style = {styles.title }> {task.title} </Text>
        </Pressable>
        <Pressable 
          onPress={onDeleteTask}>
        <Image
        style={styles.check}
        source={require('../../../assets/icons/delete.png')}
      />
      </Pressable>
      </View>
    )
  
}



const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        alignItems: "center", 
        padding: 10, 
        justifyContent: "space-between", 
        
    },
    check: {
        width: 26,
        height:26,
        
    }, 
    subContainer:{
        flexDirection: "row",
      alignItems: "center", 
   

  }
  , title:{
    marginLeft: 20,
    fontSize:16,
    
  }
    
    })