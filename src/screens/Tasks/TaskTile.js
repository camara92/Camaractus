import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export function TaskTile ({task}) {

    return (
      <View style={styles.container}>

          <View style={styles.subContainer}>
        <Image
        style={styles.check}
        source={require('../../../assets/icons/circle.png')}
      />
        <Text style = {styles.title }> {task.title} </Text>
        </View>
        <Image
        style={styles.check}
        source={require('../../../assets/icons/delete.png')}
      />
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