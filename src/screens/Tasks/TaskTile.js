import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import React, { Component } from 'react'

export function TaskTile ({task, onUpdateTask, DeleteTask}) {
  const onchangeStatus = ()=>{
    onUpdateTask(task.id)
    
  }
  const _onDeleteTask = ()=>{
    // alert("Supprimer la tâche  ")

    DeleteTask(task.id)

  }
    return (
      <View style={styles.container}>

          <Pressable 
          onPress={onchangeStatus}
          style={styles.subContainer}>
        <Image
        style={styles.check}
        source={ task.isCompleted ? require('../../../assets/icons/check_circle.png') : require('../../../assets/icons/circle.png')}
      />
        <Text style = {styles.title }> {task.title} </Text>
        </Pressable>
        <Pressable 
          onPress={_onDeleteTask}>
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