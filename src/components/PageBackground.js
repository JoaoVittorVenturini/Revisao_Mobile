import { SafeAreaView, StyleSheet } from 'react-native';

export default function PageBackground({children}) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1a1a1a',
        height: '100%'
    }
})