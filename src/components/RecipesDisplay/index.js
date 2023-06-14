import { StyleSheet, View  } from 'react-native';
import { receita1, receita2, receita3, receita4 } from '../../data';
import Recipe from '../Recipe';

const RecipesDisplay = () => {

    return (
        <View style={styles.recipeWrapper}>
            <Recipe props={receita1}></Recipe>
            <Recipe props={receita2}></Recipe>
            <Recipe props={receita3}></Recipe>
            <Recipe props={receita4}></Recipe>
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