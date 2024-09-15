import * as Crypto from "expo-crypto";

import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Checkbox from "expo-checkbox";
import { TodosCounter } from "../../components/TodosCounter";
import { styles } from "./styles";
import { useState } from "react";

type TodosProps = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<TodosProps[]>([]);
  const [todoTitle, setTodoTitle] = useState("");

  const handleAddTodo = () => {
    if (!todoTitle) {
      return Alert.alert(
        "Campo obrigatório",
        "Você precisa adicionar uma tarefa para continuar."
      );
    }
    if (todos.find((todo) => todo.title === todoTitle)) {
      return Alert.alert(
        "Tarefa já cadastrada",
        "Parece que você ja cadastrou essa tarefa, tente adicionar outra tarefa diferente."
      );
    }

    const newTodo = {
      id: Crypto.randomUUID(),
      title: todoTitle,
      isCompleted: false,
    };

    setTodos((prevState) => [...prevState, newTodo]);
    setTodoTitle("");
  };

  const handleDeleteTodo = (id: string) => {
    Alert.alert(
      "Deletar tarefa",
      "Tem certeza que deseja deletar essa tarefa?",
      [
        {
          text: "Cancelar",
          style: "cancel",
          isPreferred: true,
        },
        {
          text: "Deletar",
          onPress: () =>
            setTodos((prevState) => prevState.filter((todo) => todo.id !== id)),
          style: "destructive",
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" translucent />
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            style={styles.input}
            placeholderTextColor="#808080"
            value={todoTitle}
            onChangeText={setTodoTitle}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
            <Image
              source={require("../../../assets/images/icon_add_circle.png")}
              style={styles.iconAddCircle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.todosCounterContainer}>
          <TodosCounter title="Criadas" value={todos.length} />
          <TodosCounter
            title="Concluídas"
            value={todos.filter((todo) => todo.isCompleted).length}
            isCompleted
          />
        </View>
        <View style={styles.todosList}>
          <FlatList
            data={todos}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <View
                style={
                  item.isCompleted
                    ? styles.todosContainerCompleted
                    : styles.todosContainer
                }
              >
                <Checkbox
                  value={item.isCompleted}
                  style={styles.todosCheckBox}
                  color={item.isCompleted ? "#5E60CE" : "#4EA8DE"}
                  onValueChange={() => {
                    setTodos((prevState) =>
                      prevState.map((todo) =>
                        todo.id === item.id
                          ? { ...todo, isCompleted: !todo.isCompleted }
                          : todo
                      )
                    );
                  }}
                />
                <Text
                  style={
                    item.isCompleted
                      ? styles.todosTitleCompleted
                      : styles.todosTitle
                  }
                  onPress={() => {
                    setTodos((prevState) =>
                      prevState.map((todo) =>
                        todo.id === item.id
                          ? { ...todo, isCompleted: !todo.isCompleted }
                          : todo
                      )
                    );
                  }}
                >
                  {item.title}
                </Text>
                <TouchableOpacity
                  style={styles.todosDeleteButton}
                  onPress={() => handleDeleteTodo(item.id)}
                >
                  <Image
                    source={require("../../../assets/images/icon_trash.png")}
                    style={styles.iconDelete}
                  />
                </TouchableOpacity>
              </View>
            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyContainer}>
                <Image
                  source={require("../../../assets/images/icon_empty_todos.png")}
                  style={styles.emptyIcon}
                />
                <Text style={styles.emptyTitleText}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyDescriptionText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
