import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.viewBox}>
      <View>
        <Image
          source={require("@/assets/images/aint-this-the-life.jpg")}
          style={styles.img}
        />
        <Text style={styles.albumText}>Ain&apos;t This The Life - Single</Text>
        <Text style={styles.smlText}>1980</Text>
      </View>
      <View>
        <Image
          source={require("@/assets/images/dead-mans-party.jpg")}
          style={styles.img}
        />
        <Text style={styles.albumText}>Dead Man&apos;s Party</Text>
        <Text style={styles.smlText}>1985</Text>
      </View>
      <View>
        <Image
          source={require("@/assets/images/boi-ngo.jpg")}
          style={styles.img}
        />
        <Text style={styles.albumText}>Boi-Ngo</Text>
        <Text style={styles.smlText}>1987</Text>
      </View>
      <View>
        <Image
          source={require("@/assets/images/good-for-your-soul.jpg")}
          style={styles.img}
        />
        <Text style={styles.albumText}>Good For Your Soul</Text>
        <Text style={styles.smlText}>1983</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewBox: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingTop: 0,
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginTop: -40,
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 7,
  },
  albumText: {
    color: "white",
  },
  smlText: {
    color: "white",
    opacity: 0.5,
  },
});
