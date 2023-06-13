import { StyleSheet, View } from 'react-native';
import { Ionicons, AntDesign, Feather } from '@expo/vector-icons';

const Navbar = () => {
    
    return (
        <View style={styles.navbar}>
            <Ionicons name="home-outline" size={24} color="#fff" />
            <AntDesign name="heart" size={24} color="#fff" />
            <AntDesign name="plus" size={32} color="#FE8A07" />
            <Ionicons name="person-circle-outline" size={28} color="#fff" />
            <Feather name="settings" size={24} color="#fff" />
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#242A37',
        paddingHorizontal: 32,
        paddingVertical: 8,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default Navbar;