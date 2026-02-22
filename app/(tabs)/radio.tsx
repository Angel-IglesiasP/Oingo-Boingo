import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Entypo from "@expo/vector-icons/Entypo";
import Band from "../components/iphoneUI";
import SongBanner from "../components/songBanner";

export default function Radio() {
  return (
    <SafeAreaView style={styles.screen} edges={["top", "bottom"]}>
      <Band />
      <Text style={[styles.title, styles.b, styles.t, styles.pl]}>Radio</Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 10,
          paddingLeft: 15,
          gap: 10,
        }}
      >
        <Image
          source={require("@/assets/images/apple-radio-images/apple_music_radio_1.jpg")}
          style={styles.image}
        />

        <Image
          source={require("@/assets/images/apple-radio-images/apple_music_radio_musica_uno.jpg")}
          style={styles.image}
        />

        <Image
          source={require("@/assets/images/apple-radio-images/apple_music_radio_hits.jpg")}
          style={styles.image}
        />

        <Image
          source={require("@/assets/images/apple-radio-images/apple_music_radio_country.jpg")}
          style={styles.image}
        />

        <Image
          source={require("@/assets/images/apple-radio-images/apple_music_radio_club.jpg")}
          style={styles.image}
        />

        <Image
          source={require("@/assets/images/apple-radio-images/apple_music_radio_chill.jpg")}
          style={styles.image}
        />
      </View>

      <Text
        style={[styles.subtitle, styles.b, styles.t, styles.pl, styles.ptb]}
      >
        On Air Now
      </Text>

      <View style={styles.pl}>
        <View
          style={{
            backgroundColor: "#466B88",
            maxWidth: 350,
            borderRadius: 15,
          }}
        >
          <Image
            source={require("@/assets/images/apple-radio-images/apple_music_super_bowl_lx_promo.jpg")}
            style={styles.wideImage}
          />
          <View style={{ flexDirection: "row", padding: 15 }}>
            <View>
              <Text
                style={{
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Live - 10-11AM
              </Text>

              <Text style={[styles.header, styles.t, styles.b]}>
                Super Bowl LX Reflection Show
              </Text>

              <Text style={[styles.header, styles.t]}>
                Relisten to the biggest Super Bowl LX weeke
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#577A96",
                height: 30,
                width: 30,
                borderRadius: 15,
                alignSelf: "center",
                right: 30,
              }}
            >
              <Entypo
                name="controller-play"
                size={24}
                color="white"
                style={{ position: "absolute", left: 5, top: 3 }}
              />
            </View>
          </View>
        </View>
      </View>
      <SongBanner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
    overflow: "hidden",
  },
  image: {
    borderRadius: 15,
    height: 120,
    width: 120,
  },
  wideImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 15,
    height: 270,
    width: 350,
  },

  title: { fontSize: 36 },
  subtitle: { fontSize: 24 },
  header: { fontSize: 16 },

  b: { fontWeight: "bold" },
  g: { gap: 10 },
  t: { color: "white" },
  p: { padding: 10 },
  pl: { paddingLeft: 15 },
  ptb: { paddingVertical: 20 },
});
