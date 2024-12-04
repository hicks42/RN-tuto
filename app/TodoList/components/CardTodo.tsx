import CheckImg from "@/assets/images/check.png";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
interface Todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function CardTodo({
  todo,
  onPress,
  onLongPress,
}: {
  todo: Todo;
  onPress: (todo: Todo) => void;
  onLongPress: (todo: Todo) => void;
}) {
  return (
    <TouchableOpacity
      onPress={() => onPress(todo)}
      onLongPress={() => onLongPress(todo)}
      style={s.card}
    >
      <Text
        style={[
          s.text,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && (
        <Image style={s.img} source={CheckImg} alt="checked" />
      )}
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    height: 75,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    marginHorizontal: 2,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: { fontSize: 20 },
  img: { height: 25, width: 25 },
});
