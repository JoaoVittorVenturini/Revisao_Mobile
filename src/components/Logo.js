import { Image, View, StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.logo} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 280,
        height: 272,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '90%',
        height: '90%'
    }
});