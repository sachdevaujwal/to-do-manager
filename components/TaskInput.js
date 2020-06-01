import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const TaskInput = props => {
    const [enteredTask, setEnteredTask] = useState('');

    const TaskInput = (enteredText) => {
        setEnteredTask (enteredText);
    };

    const addTaskHandler = () => {
        props.onAddTask(enteredTask);
        setEnteredTask('');
    };
      
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputCont}>
                <TextInput 
                    placeholder="To Do" 
                    style={styles.Textinp}  
                    onChangeText={TaskInput}
                    value= {enteredTask}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonDesign}>
                        <Button title="ADD TASK" onPress= {addTaskHandler} />
                    </View>
                    <View style={styles.buttonDesign}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create ({
    inputCont: {
        flex: 1,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    Textinp: {
        width: '70%', 
        borderColor: 'black',
        borderWidth: 2, 
        padding: 10,
        marginBottom: 10 
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    buttonDesign: {
        width: '40%'
    }
});  

export default TaskInput;