import {View, Text, Pressable, StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

type Props ={
    icon: keyof typeof MaterialIcons.glyphMap
    label: string,
    onPress: () => void
}
export default ({icon, label, onPress} : Props) => (
    <Pressable style={style.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color="#fff"/>
        <Text style={style.iconButtonLabel}>{label}</Text>
    </Pressable>
);

const style = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12
    }
})