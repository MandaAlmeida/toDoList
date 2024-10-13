"use client"

import React, { useEffect, useState } from "react"
import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native"


import { styles } from "./styles"

import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

import { Task } from "~/src/components/task";

interface taskProps {
  id: string,
name: string,
active: boolean
}

export function Home(){
const [tasks, setTasks ] = useState<taskProps[]>([]);
const [taskName, setTaskName] = useState('');
const [taskConcluid, setTasksConcluid] = useState<string[]>([]);
const [isFocused, setIsFocused] = useState(false);

function handleTaskAdd() {
 
  const taskAlreadyExists = tasks.some(task => task.name === taskName);

  if (taskAlreadyExists) {
    return Alert.alert('Tarefa já criada', 'Já existe uma tarefa com esse nome na lista');
  }

  if (taskName !== '') {
    const newTask: taskProps = {
      id: Date.now().toString(), 
      name: taskName,
      active: false, 
    };

    
    setTasks(prevState => [...prevState, newTask]);
    setTaskName(''); 
  } else {
    Alert.alert('Nome inválido', 'O nome da tarefa não pode estar vazio.');
  }
}

 
function handleTaskToggle(id: string) {
  setTasks(prevTasks =>
    prevTasks.map(task =>
      task.id === id ? { ...task, active: !task.active } : task
    )
  );
}

useEffect(() => {
  const completedTaskIds = tasks
    .filter(task => task.active === true) // Filtra as tarefas concluídas
    .map(task => task.id); // Extrai os IDs das tarefas concluídas

  setTasksConcluid(completedTaskIds); // Atualiza `taskConcluid` com os IDs das tarefas concluídas

  console.log('Tarefas concluídas (ids):', completedTaskIds);
}, [tasks]);

function handleTaskRemove(name: string){
  Alert.alert("Remover", `Remover a tarefa ${name}?`,[
    {text: 'Sim', 
      onPress: () => setTasks(prevState => prevState.filter(task => task.name != name))
    },
    {text: 'Não',
      style: 'cancel' 
    },
  ])
}


  return (
  <View  style={styles.container}>  
  <View  style={styles.containerHeader}> 
    <Image source={require('../../assets/logo.png')} />
    <View style={styles.form}>
      <TextInput 
      style={[styles.input, isFocused && styles.inputFocused]}
      placeholder='Adicione uma nova tarefa'
      placeholderTextColor={"#6B6B6B"}
      onChangeText={setTaskName}
      value={taskName}
      onFocus={() => setIsFocused(true)}  
        onBlur={() => setIsFocused(false)} 
      />
      <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
      <AntDesign name="pluscircleo" size={18} color="#fdfcfe" />
      </TouchableOpacity>
    </View>
</View>       
<View  style={styles.containerList}>
     <View style={styles.list}>
      <View style={styles.listContent}>
      <Text style={styles.textCreate}>Criadas </Text>
      <Text style={styles.textCount}>{tasks.length}</Text></View>
      <View style={styles.listContent}>
      <Text style={styles.textConclude}>Concluídas</Text>
      <Text style={styles.textCount}>{taskConcluid.length}</Text>
      </View>
      </View>  
      <FlatList 
      data={tasks}
      keyExtractor={item => item.id}
      renderItem={ ({item}) => (<Task id={item.id} key={item.id} name={item.name} onRemove={() => handleTaskRemove(item.name)} handleTaskConclue={() => handleTaskToggle(item.id)} active={item.active}/>)}

      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
      <View style={styles.containerListEmpty}>
         <View style={styles.afterElement} />
        <Feather name="clipboard" size={56} color="#333333" />
        <Text style={styles.textBoldListEmpty}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.textListEmpty}>Crie tarefas e organize seus itens a fazer</Text> 
      </View>
      )}
      />
      </View>
</View>
  )
}
