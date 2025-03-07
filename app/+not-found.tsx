import { View, StyleSheet } from 'react-native'
import { Link, Stack} from 'expo-router'

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Ooops! Not Found' }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>Go to Home</Link>
            </View>
        </>
    );
 }

 const styles= StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#25292e'
        },
        button: {
            fontSize: 20,
            textDecorationColor: 'underline',
            color: '#fff'
        }
 });