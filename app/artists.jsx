import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Artists() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.box}>
        <View style={[styles.box, styles.rp]}>
          <Image
            source={require("@/assets/images/queen.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>Queen</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={25} color="grey" />
      </View>

      <View style={styles.hl} />

      <View style={styles.box}>
        <AntDesign name="star" size={8} color="#E5434E" />
        <View style={styles.box}>
          <Image
            source={require("@/assets/images/creomusic.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>Creomusic</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={25} color="grey" />
      </View>

      <View style={styles.hl} />

      <View style={styles.box}>
        <AntDesign name="star" size={8} color="#E5434E" />
        <View style={styles.box}>
          <Image
            source={require("@/assets/images/oingo-boingo.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>Oingo Boingo</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={25} color="grey" />
      </View>

      <View style={styles.hl} />

      <View style={styles.box}>
        <View style={[styles.box, styles.rp]}>
          <Image
            source={require("@/assets/images/will-wood.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>Will Wood</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={25} color="grey" />
      </View>

      <View style={styles.hl} />

      <View style={styles.box}>
        <View style={[styles.box, styles.rp]}>
          <Image
            source={require("@/assets/images/twisted-sister.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>Twisted Sister</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={25} color="grey" />
      </View>

      <View style={styles.hl} />

      <View style={styles.box}>
        <AntDesign name="star" size={8} color="#E5434E" />
        <View style={styles.box}>
          <Image
            source={require("@/assets/images/koraii.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>KORAII</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={25} color="grey" />
      </View>

      <View style={styles.hl} />

      <View style={styles.box}>
        <View style={[styles.box, styles.rp]}>
          <Image
            source={require("@/assets/images/the-walters.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>The Walters</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={25} color="grey" />
      </View>

      <View style={styles.hl} />

      <View style={styles.box}>
        <View style={[styles.box, styles.rp]}>
          <Image
            source={require("@/assets/images/Dimrain47.jpg")}
            style={styles.image}
          />
          <Text style={styles.text}>Dimrain47</Text>
        </View>
        <MaterialIcons name="keyboard-arrow-right" size={25} color="grey" />
      </View>

      <View style={styles.hl} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },
  box: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 40,
    gap: 10,
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },

  text: { color: "white", fontSize: 16 },
  rp: { paddingLeft: 18 },
  hl: {
    width: 340,
    height: 0.5,
    backgroundColor: "grey",
    margin: 10,
    left: 50,
  },
});
