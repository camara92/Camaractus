import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, FlatList } from 'react-native'
import Header from '../../components/Header'

export default function TaskScreen() {
    // List des tâches 
    // State pour garder en memoire les tâches : 
    const [tasks, SetTask] = useState([
        {
            id: 1,
            title: "Hello Wordl",
            isCompleted: false,
        }, 
        {
            id: 2,
            title: "Hello Wordl",
            isCompleted: false,
        }
    ]);
const renderItem = ({item})=>{
    return(
    <Text> {item.title} </Text>
    )
}
    // 2* Task counter => props é title 
    // TaskList : retourner les flatlist où il y a la liste des tâches 

    return (
        <View>
           
            <FlatList
                ListHeaderComponent = {<Header/>}
                contentContainerStyle= {{flexGrow:1, }}
                data = {tasks}
                keyExtractor = {(item, index)=> index.toString()}
                renderItem = {renderItem}
            />
        </View>
    );
}

