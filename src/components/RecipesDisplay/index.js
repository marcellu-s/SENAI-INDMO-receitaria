import { StyleSheet, View  } from 'react-native';
import Recipe from '../Recipe';

const RecipesDisplay = () => {

    return (
        <View style={styles.recipeWrapper}>
            <Recipe></Recipe>
            <Recipe></Recipe>
            <Recipe></Recipe>
        </View>
    );
};

const styles = StyleSheet.create({
    recipeWrapper: {
        marginTop: 64,
        gap: 32,
    },
});

export default RecipesDisplay;