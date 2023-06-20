import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, FlatList } from 'react-native'
import Header from '../../components/Header'
import { TaskTile } from './TaskTile';
import TaskForm from './TaskForm';

export default function TaskScreen() {
    // List des tâches 
    // State pour garder en memoire les tâches : 
    const [tasks, SetTasks] = useState([

    ]);
    const renderItem = ({ item }) => {
        return (
            <TaskTile task={item} onUpdateTask={onUpdateTask} DeleteTask={onDeleteTask} />
        )
    }
    // ajouter une fonction pour une tâche au state 
    const onAddTask = (title) => {
        SetTasks([...tasks, {
            id: Date.now(),
            title,
            isCompleted: false

        }])
    }
    // 2* Task counter => props é title 
    // TaskList : retourner les flatlist où il y a la liste des tâches 
    const onDeleteTask = (id) => {
        let newTasks = []
        tasks.forEach(t => {
            if (t.id !== id) {
                newTasks.push(t)
                return;
            }


        })

        SetTasks(newTasks)
    }
    const onUpdateTask = (id) => {
        let newTasks = []
        tasks.forEach(t => {
            if (t.id !== id) {
                newTasks.push(t)
                return;
            }
            newTasks.push({
                id,
                // title: "Tâche ajoutée avec success", 
                title: t.title,
                isCompleted: !t.isCompleted
            })

        })

        SetTasks(newTasks)
    }
    return (
        <View>

            <FlatList
                ListHeaderComponent={
                    <>
                        <Header />
                        <TaskForm onAddTask={onAddTask} />
                    </>
                }
                contentContainerStyle={{ flexGrow: 1, }}
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    );
}

