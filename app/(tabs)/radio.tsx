import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function RadioScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>Radio Screen Placeholder</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
