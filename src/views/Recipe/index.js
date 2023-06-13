import { StyleSheet, Text, View } from 'react-native';
import HeaderRecipe from '../../components/recipeheader';

// Tela receitas do APP
const RecipeScreen = () => {

    return (
        <View style={styles.RecipeScreenContainer}>
            <HeaderRecipe />
        </View>
    );
}

const styles = StyleSheet.create({
    RecipeScreenContainer: {
        padding: 32,
    },
});

export default RecipeScreen;