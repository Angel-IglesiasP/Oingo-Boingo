import { ImgComponent } from "@/src/img-component/img-component";
import { StyleSheet } from "react-native";

export default function Index() {
  return (
    // <View style={styles.viewBox}></View>
    // <SafeAreaView style={styles.viewBox}>
    //   <View>
    //     <Image
    //       source={require("@/assets/images/dead-mans-party.jpg")}
    //       style={styles.img}
    //     />
    //     <Text style={styles.albumText}>Dead Man's Party</Text>
    //     <Text style={styles.smlText}>1985</Text>
    //   </View>
    //   <View>
    //     <Image
    //       source={require("@/assets/images/aint-this-the-life.jpg")}
    //       style={styles.img}
    //     />
    //     <Text style={styles.albumText}>Ain't This The Life - Single</Text>
    //     <Text style={styles.smlText}>1980</Text>
    //   </View>
    //   <View>
    //     <Image
    //       source={require("@/assets/images/good-for-your-soul.jpg")}
    //       style={styles.img}
    //     />
    //     <Text style={styles.albumText}>Good For Your Soul</Text>
    //     <Text style={styles.smlText}>1983</Text>
    //   </View>
    //   <View>
    //     <Image
    //       source={require("@/assets/images/boi-ngo.jpg")}
    //       style={styles.img}
    //     />
    //     <Text style={styles.albumText}>Boi-Ngo</Text>
    //     <Text style={styles.smlText}>1987</Text>
    //   </View>
    // </SafeAreaView>

    <ImgComponent img="@/assets/images/boi-ngo.jpg" />
  );
}

const styles = StyleSheet.create({
  viewBox: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "black",
    gap: 10,
    padding: 10,
  },
  img: {
    width: 190,
    height: 190,
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
