import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native'


const TaskItem = props => {

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id) } >
            <View style={styles.newStyle}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    newStyle: {
        padding:10,
        margin: 10,
        backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TaskItem;