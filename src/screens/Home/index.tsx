import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { styles } from "./style";
import { Task } from "../../components/task";

import Logo from '../../../assets/Logo.png';
import Plus from '../../../assets/plus.png';
import Clipboard from '../../../assets/Clipboard.png';

export function Home(){
    const [tasks, setTasks] = useState<string[]>([])
    const [tasksDescription, setTasksDescription] = useState('')
    const [completeTask, setCompleteTask] = useState(0)

    const inc = () => setCompleteTask(completeTask + 1)
    const dec = () => setCompleteTask(completeTask - 1)

    function handleTasksAdd(){
        setTasks(prevState => [...prevState, tasksDescription]);
        setTasksDescription('')
    }

    function handleTasksRemove(text: string){
        Alert.alert('Remover', 'Deseja remover esta tarefa?', [
            {
                text: 'Sim',
                onPress: () => {setTasks(prevState => prevState.filter(task => task !== text))}
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return(
        <View style={{flex: 1}}>
            <View style={styles.containerLogo}>
                <Image source={Logo} />
            </View>
            <View style={styles.container}>
                <View style={styles.containerInput}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor='#808080'
                        onChangeText={setTasksDescription}
                        value={tasksDescription}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleTasksAdd}>
                        <Image source={Plus} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerTasks}>
                    <View style={styles.containerTasksText}>
                        <Text style={styles.created}>
                            Criadas
                        </Text>
                        <Text style={styles.taskNumber}>
                            {tasks.length}
                        </Text>
                    </View>
                    <View style={styles.containerTasksText}>
                        <Text style={styles.completed}>
                            Concluidas
                        </Text>
                        <Text style={styles.taskNumber}>
                            {completeTask}
                        </Text>
                    </View>
                </View>
                <View style={{marginBottom: 100}}>
                    <FlatList 
                        data={tasks}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <Task 
                                text={item}
                                onRemove={() => handleTasksRemove(item)}
                                inc={inc}
                                dec={dec}
                            />
                        )}
                        ListEmptyComponent={() => (
                            <View style={styles.containerListEmpty}>
                                <Image source={Clipboard} />
                                <Text style={styles.listEmptyTextFirst}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={styles.listEmptyTextSecond}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}