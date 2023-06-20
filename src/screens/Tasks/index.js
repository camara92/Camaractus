import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, FlatList } from 'react-native'
import Header from '../../components/Header'
import { TaskTile } from './TaskTile';
import TaskForm from './TaskForm';

export default function TaskScreen() {
    // List des tâches 
    // State pour garder en memoire les tâches : 
    const [tasks, SetTask] = useState([
        {
            id: 1,
            title: "Hello Wordl",
            isCompleted: false,
        }, 
     
    ]);
const renderItem = ({item})=>{
    return(
    <TaskTile task= {item} />
    )
}
    // ajouter une fonction pour une tâche au state 
    const onAddTask = (title)=>{
        SetTask([...tasks, {
            id: Date.now(),
            title,
             isCompleted: false

        }])
    }
    // 2* Task counter => props é title 
    // TaskList : retourner les flatlist où il y a la liste des tâches 

    return (
        <View>
           
            <FlatList
                ListHeaderComponent = {
                <>
                <Header/>
                <TaskForm onAddTask= { onAddTask } />
                </>
                }
                contentContainerStyle= {{flexGrow:1, }}
                data = {tasks}
                keyExtractor = {(item, index)=> index.toString()}
                renderItem = {renderItem}
            />
        </View>
    );
}

