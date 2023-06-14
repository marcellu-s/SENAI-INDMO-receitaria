import { StyleSheet, View  } from 'react-native';
import receita1 from '../../data';
import Recipe from '../Recipe';

const RecipesDisplay = () => {

    return (
        <View style={styles.recipeWrapper}>
            <Recipe props={receita1}></Recipe>
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