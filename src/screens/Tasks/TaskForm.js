import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import React, { Component, useState } from 'react'

export default function TaskForm({onAddTask}) {
    const [newTitle, setNewTitle] = useState();
    const onChangeText = (val) => {
        setNewTitle(val)
    }
    const onAddNewTask = () => {
        if(newTitle ==="")
        return;
            // alert("veiller ajouter une tâche ")
            onAddTask(newTitle);
        setNewTitle(""); 
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={newTitle}
                placeholder='Nouvelle tâche'
            />
            <Button
                title="Ajouter"
                onPress={onAddNewTask}
                style={styles.btnAdd}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        // paddingLeft:20,
        // paddingRight: 20,
        paddingHorizontal:20,
        marginTop: 10,


    },
    input: {
        borderColor: "black",
        borderWidth: 1, 
        borderRadius: 5,
        width: "70%", 
        height:40 ,
        marginBottom: 10
    },
    btnAdd: {
        color: "blue"
    }
})