import { Image, View } from "react-native";
import { ClothingType } from "../recommender";

export const clothingImages = {
  [ClothingType.Hat]:  require('../assets/beanie.png'),
  [ClothingType.Coat]: require('../assets/coat.png'),
  [ClothingType.Layer]: require('../assets/layer.png'),
  [ClothingType.Pants]: require('../assets/pants.png'),
  [ClothingType.Shoes]: require('../assets/shoes.png')
}

export default function ClothingImage({ color, type }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={clothingImages[type]}
        style={{ height: 240, width: 240, resizeMode: "contain", tintValue: color }}
      />
    </View>
  );
}
