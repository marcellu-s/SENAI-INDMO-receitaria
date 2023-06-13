import { StyleSheet, Text, View } from 'react-native';
import HeaderApp from '../../components/Header';

// Tela principal do APP
const HomeScreen = () => {

    return (
        <View style={styles.homeScreenContainer}>
            <HeaderApp />
        </View>
    );
}

const styles = StyleSheet.create({
    homeScreenContainer: {
        padding: 32,
    },
});

export default HomeScreen;