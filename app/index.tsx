import { View } from "react-native";
import Body from "./components/body";
import Footer from "./components/Footer";
import Header from "./components/header";
import Band from "./components/iphoneUI";

export default function Index() {
  return (
    <View style={{ backgroundColor: "black" }}>
      <Band />
      <Header />
      <Body />
      <Footer />
    </View>
  );
}
