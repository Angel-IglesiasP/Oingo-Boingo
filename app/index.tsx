import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Body from "./components/body";
import Footer from "./components/Footer";
import Header from "./components/header";
import Band from "./components/iphoneUI";

export default function Index() {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <Band />
      <Header />
      <View style={styles.content}>
        <Body />
      </View>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  content: {
    flex: 1,
    overflow: "hidden",
  },
});
