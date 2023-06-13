import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

// import { useFonts, Poppins_700Bold, Poppins_400Regular, Poppins_300Light } from '@expo-google-fonts/poppins';

// let [fontsLoaded] = useFonts({
//     Poppins_300Light,
//     Poppins_400Regular,
//     Poppins_700Bold
// });

const HeaderApp = () => {

    return (
        <View style={styles.header}>
            <Feather name="menu" size={32} color="#333" />
            <Text style={styles.title}>Bem-vindo</Text>
            <Ionicons name="person-circle" size={32} color="#333" />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        color: '#333',
        fontWeight: 'bold',
    },
});

export default HeaderApp;