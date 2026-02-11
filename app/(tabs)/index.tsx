import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Band from "../components/iphoneUI";

export default function Home() {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <Band />
      <View style={styles.header}>
        <Text style={styles.leftCornerText}> Home </Text>
        <Text style={styles.headerBottomText}>Top Picks For You </Text>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatarIcon}
          />
        </View>
      </View>

      <View style={styles.bodyHome}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    position: "relative",
    width: "100%",
    minHeight: 95,
    backgroundColor: "black",
    top: 0,
  },
  leftCornerText: {
    color: "#fcfbfb",
    fontSize: 30,
    fontWeight: "500",
    position: "absolute",
    top: 15,
    left: 6,
  },
  headerBottomText: {
    color: "#fcfbfb",
    fontSize: 20,
    fontWeight: "500",
    position: "absolute",
    bottom: 0,
    left: 15,
  },
  iconContainer: {
    position: "absolute",
    top: 15,
    right: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  avatarIcon: {
    top: 5,
    width: 30,
    height: 30,
    borderRadius: 25,
    resizeMode: "contain",
  },
  bodyHome: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
