import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

const days = ["Dimanche", "Lundi", "MArdi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const month= ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

export default function Header() {
    const date = new Date(); 
  return (
    <Text> {`${days[date.getDay()]} ${date.getDate()} ${month[date.getMonth()] } ${[date.getFullYear()] } `} </Text>
    // <Text> {Date.now().toString()} </Text>
  )
}




const styles = StyleSheet.create({

})