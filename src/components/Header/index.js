import React from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'


export default function Header() {
  return (
    <Text> {Date.now().toString()} </Text>
  )
}
