import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {
  const [ToDoTask, setToDoTask] = useState ([]);
  const [isAddMode, setIsAddMode] = useState (false);

  const AddTask = taskTitle => {
    setToDoTask(currentTasks => [
      ...currentTasks, 
      {id: Math.random().toString(), value: taskTitle}
    ]);
    setIsAddMode(false);
  };

  const RemoveTask = taskID => {
    setToDoTask(currentTasks => {
      return currentTasks.filter((task) => task.id != taskID);
    });
  };

  const CancelTaskAddition = () => {
    setIsAddMode(false);
  };



  return (
    <View style={styles.screen}>
      <Button title="Add New Task" onPress={() => setIsAddMode(true)} />
      <TaskInput visible={isAddMode} onAddTask={AddTask} onCancel={CancelTaskAddition} />

      <FlatList 
        keyExtractor= {(item, index) => item.id}
        data={ToDoTask} 
        renderItem={itemData => <TaskItem id={itemData.item.id} onDelete ={RemoveTask} title={itemData.item.value} /> }
      />        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
