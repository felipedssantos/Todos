import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  todosCounter: {
    flexDirection: "row",
    alignItems: "center",
  },
  createdTodosText: {
    color: "#4EA8DE",
    marginRight: 8,
    fontWeight: "bold",
  },
  completedTodosText: {
    color: "#8284FA",
    marginRight: 8,
    fontWeight: "bold",
  },
  todosCounterBadge: {
    backgroundColor: "#262626",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  todosCounterNumber: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },
});
