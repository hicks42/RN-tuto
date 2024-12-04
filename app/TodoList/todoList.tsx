import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";
import Dialog from "react-native-dialog";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AddButton from "./components/AddButton";
import CardTodo from "./components/CardTodo";
import Header from "./components/Header";
import TabBottomMenu from "./components/TabBottomMenu";
interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const TODO_LIST = [
  { id: 1, title: "Sortir le chien", isCompleted: false },
  { id: 2, title: "Réparer la Machine à laver", isCompleted: false },
  { id: 3, title: "Réparer la voiture", isCompleted: false },
  { id: 4, title: "Recouvrir mon RSA", isCompleted: false },
  { id: 5, title: "Laver le sol", isCompleted: false },
  { id: 6, title: "Faire les courses", isCompleted: false },
  { id: 7, title: "Resrever le resto", isCompleted: false },
  { id: 8, title: "Changer l'ampoule", isCompleted: false },
];
let isFirstrender = true;
let isLoadUpdate = false;

export default function todoList() {
  const [selectedTabName, setSelectedTabName] = useState("all");
  const [todoList, setTodoList] = useState([]);
  const [isAddDialogVisible, setIsAddDialogVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const storeTodoList = async () => {
    try {
      const jsonValue = JSON.stringify(todoList);
      await AsyncStorage.setItem("todoList", jsonValue);
    } catch (e) {
      alert("erreur" + e);
    }
  };

  const getStoredTodoList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("todoList");
      if (jsonValue !== null) {
        const parsedTodoList = JSON.parse(jsonValue);
        setTodoList(parsedTodoList);
      }
    } catch (e) {
      alert("erreur" + e);
    }
  };

  useEffect(() => {
    getStoredTodoList();
  }, []);

  useEffect(() => {
    if (isLoadUpdate) {
      isLoadUpdate = false;
    } else {
      if (!isFirstrender) {
        storeTodoList();
      } else {
        isFirstrender = false;
      }
    }
  }, [todoList]);

  function generateTodoId(todoList: { id: number }[]): number {
    const maxId =
      todoList.length > 0 ? Math.max(...todoList.map((todo) => todo.id)) : 7;
    return Math.max(maxId + 1, 8);
  }

  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => !todo.isCompleted);
      case "done":
        return todoList.filter((todo) => todo.isCompleted);
      default:
        return [];
    }
  }

  function updateTodo(todo: Todo) {
    const updatedTodo = {
      ...todo,
      isCompleted: !todo.isCompleted,
    };

    const indexToUpdate = todoList.findIndex(
      (todo) => todo.id === updatedTodo.id
    );

    const updatedTodoList = [...todoList];
    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
  }

  function deleteTodo(todoToDelete: Todo) {
    Alert.alert("Suppression", "Confirmez la suppression", [
      {
        text: "Supprimer",
        style: "destructive",
        onPress: () => {
          setTodoList(todoList.filter((todo) => todo.id !== todoToDelete.id));
        },
      },
      {
        text: "Annuler",
        style: "cancel",
      },
    ]);
  }

  function activeDialog() {
    setIsAddDialogVisible(true);
  }

  function addTodo() {
    setIsAddDialogVisible(true);
    const newTodo = {
      id: generateTodoId(todoList),
      title: inputValue,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setIsAddDialogVisible(false);
  }

  function renderTodoList() {
    return getFilteredList().map((todo) => (
      <View style={s.cardItem} key={todo.id}>
        <CardTodo
          onPress={() => updateTodo(todo)}
          onLongPress={() => deleteTodo(todo)}
          todo={todo}
        />
      </View>
    ));
  }
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
          <AddButton onPress={activeDialog} />
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <TabBottomMenu
          onPress={setSelectedTabName}
          selectedTabName={selectedTabName}
          todoList={todoList}
        />
      </View>
      <Dialog.Container
        visible={isAddDialogVisible}
        onBackdropPress={() => setIsAddDialogVisible(false)}
      >
        <Dialog.Title>Créer un tâche</Dialog.Title>
        <Dialog.Description>Choisi un nom pour la tâche</Dialog.Description>
        <Dialog.Input onChangeText={setInputValue} />
        <Dialog.Button
          disabled={inputValue.trim().length === 0}
          label={"Créer"}
          onPress={addTodo}
        />
      </Dialog.Container>
    </>
  );
}

const s = StyleSheet.create({
  app: {
    backgroundColor: "#F9F9F9",
    flex: 1,
    paddingHorizontal: 12,
  },
  header: {
    // backgroundColor: "white",
    flex: 1,
  },
  body: {
    flex: 5,
  },
  footer: {
    // backgroundColor: "green",
    // flex: 1,
    height: 30,
  },
  lightText: {
    color: "white",
  },
  cardItem: { marginBottom: 20 },
});
