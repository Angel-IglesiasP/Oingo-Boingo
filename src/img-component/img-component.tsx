import { Image } from "react-native";

type Props = {
  img: string;
};

export function ImgComponent({ img }: Props) {
  return <Image source={require(img)} style={{ width: 400, height: 400 }} />;
}
