import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function NewNotification({
  title,
  body,
  onChangeText,
}: {
  title: string;
  body: string;
  onChangeText: (title: string, text: string) => void;
}) {
  return (
    <>
      <Text style={s.pageTitle}> Nouvelle Notifictaion</Text>
      <View style={s.viewCard}>
        <TextInput
          style={s.title}
          placeholder="Entrez le titre"
          value={title}
          onChangeText={(text) => onChangeText("title", text)}
        />
        <TextInput
          style={s.body}
          placeholder="Entrez le message"
          value={body}
          onChangeText={(text) => onChangeText("body", text)}
        />
      </View>
    </>
  );
}

const s = StyleSheet.create({
  viewCard: {
    width: "75%",
    backgroundColor: "white",
    // flexDirection: "row",
    // height: 75,
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
  pageTitle: { fontSize: 30 },
  title: { fontSize: 20, textDecorationLine: "underline" },
  body: { fontSize: 15, textDecorationLine: "underline" },
});
