import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  logoContainer: {
    height: 173,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  logo: {
    width: 110,
    height: 32,
  },
  content: {
    paddingHorizontal: 24,
    marginTop: -26,
  },
  form: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginRight: 4,
    backgroundColor: "#262626",
    color: "#808080",
    height: 52,
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#0D0D0D",
  },
  addButton: {
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    height: 52,
    width: 52,
  },
  iconAddCircle: {
    width: 16,
    height: 16,
  },
  todosCounterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 32,
  },
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
  emptyContainer: {
    alignItems: "center",
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#333333",
    paddingHorizontal: 20,
    paddingVertical: 48,
  },
  emptyIcon: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  emptyTitleText: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  emptyDescriptionText: {
    color: "#808080",
    fontSize: 14,
    textAlign: "center",
  },
  todosContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#333333",
  },
  todosList: {
    paddingTop: 24,
  },
  todosContainerCompleted: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#262626",
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#262626",
  },
  todosCheckBox: {
    marginRight: 8,
    alignSelf: "center",
  },
  todosTitle: {
    color: "#D9D9D9",
    flex: 1,
    flexWrap: "wrap",
  },
  todosTitleCompleted: {
    color: "#808080",
    flex: 1,
    flexWrap: "wrap",
    textDecorationLine: "line-through",
  },
  todosDeleteButton: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  iconDelete: {
    width: 12,
    height: 14,
  },
});
