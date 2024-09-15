import { Text, View } from "react-native";

import { styles } from "./styles";

type TodosCounterProps = {
  title: string;
  value: number;
  isCompleted?: boolean;
};

export function TodosCounter({ title, value, isCompleted }: TodosCounterProps) {
  return (
    <View style={styles.todosCounter}>
      <Text
        style={
          isCompleted ? styles.completedTodosText : styles.createdTodosText
        }
      >
        {title}
      </Text>
      <View style={styles.todosCounterBadge}>
        <Text style={styles.todosCounterNumber}>{value}</Text>
      </View>
    </View>
  );
}
