import { StyleSheet, View, Text, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const GoalItem = ({ text, id, onDeleteItem }) => {
  function deleteGoalHandler() {
    onDeleteItem(id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalHandler}
      >
        <View style={styles.goalTextContainer}>
          <MaterialIcons name="delete" size={30} color="#f312a2" />
          <Text style={styles.goalText}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  goalTextContainer: {
    flexDirection: "row",
  },
});

export default GoalItem;
