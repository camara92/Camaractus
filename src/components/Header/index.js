import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const month= ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

export default function Header() {
    const date = new Date(); 
  return (
    <View style={styles.container}>

        <Text style={styles.date}> {`${days[date.getDay()]} ${date.getDate()} ${month[date.getMonth()] } ${[date.getFullYear()] } `} </Text>
    </View>
    // <Text> {Date.now().toString()} </Text>
  )
}

const styles = StyleSheet.create({
container: {
    paddingLeft : 25, 
    paddingTop : 10, 
},
date:{
    fontSize : 26, 
    fontWeight: "bold",

}

})