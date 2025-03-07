import { ImageSource } from "expo-image";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View, Platform, Pressable } from "react-native";


type Props = {
    onSelect: (image: ImageSource) => void;
    onCloseModal: () => void;
}

export default ({ onSelect, onCloseModal}: Props) => {
    const [emojic] = useState([
        require("../assets/images/emoji1.png"),
        require("../assets/images/emoji2.png"),
        require("../assets/images/emoji3.png"),
        require("../assets/images/emoji4.png"),
        require("../assets/images/emoji5.png"),
        require("../assets/images/emoji6.png"),
    ]);
    return (
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            data={emojic}
            contentContainerStyle={styles.listContainer}
            renderItem={({item, index}) => (
                <Pressable onPress={() => { 
                        onSelect(item)
                        onCloseModal()
                    }}>
                    <Image source={item} key={index} style={styles.image}/>
                </Pressable>
            )}>
        </FlatList>
    );
}


const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width:100,
        height: 100,
        marginRight: 20
    }
})