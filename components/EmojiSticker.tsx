import { Image, type ImageSource } from "expo-image";
import { View } from "react-native";

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
}

export default ({imageSize, stickerSource}: Props) => {
    return (
        <View style={{ top: -350 }}>
            <Image source={stickerSource} style= {{ width: imageSize, height: imageSize}}/>
        </View>
    );
}