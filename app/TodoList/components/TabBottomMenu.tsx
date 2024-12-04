import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}
export default function TabBottomMenu({
  onPress,
  selectedTabName,
  todoList,
}: {
  onPress: (tabName: string) => void;
  selectedTabName: string;
  todoList: Todo[];
}) {
  const countByStatus = todoList.reduce(
    (acc, todo) => {
      todo.isCompleted ? acc.done++ : acc.inProgress++;
      return acc;
    },
    { all: todoList.length, inProgress: 0, done: 0 }
  );

  function getTextStyle(tabName: string) {
    return {
      fontwWeight: "bold",
      color: tabName === selectedTabName ? "#27F6E5" : "black",
    };
  }
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => onPress("all")}>
        <Text style={getTextStyle("all")}>All ({countByStatus.all}) </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("inProgress")}>
        <Text style={getTextStyle("inProgress")}>
          In progress ({countByStatus.inProgress})
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")}>
        <Text style={getTextStyle("done")}>Done ({countByStatus.done})</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
