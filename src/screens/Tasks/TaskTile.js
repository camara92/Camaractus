import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'

export function TaskTile ({task}) {

    return (
      <View>
        <Image
        style={styles.check}
        source={require('../../../assets/icons/circle.png')}
      />
        <Text> {task.title} </Text>
        <Image
        style={styles.check}
        source={require('../../../assets/icons/delete.png')}
      />
      </View>
    )
  
}



const styles = StyleSheet.create({
  check: {
    width: 56,
    height:56,

  }
    
    })