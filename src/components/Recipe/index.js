import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather  } from '@expo/vector-icons';

const Recipe = () => {

    return (
        <View style={styles.recipe}>
            <Text style={styles.recipeTitle}>Bolo de Aipim</Text>

            <View style={styles.recipeStars}>
                <Feather name="star" size={12} color="#FFCF5C" />
                <Feather name="star" size={12} color="#FFCF5C" />
                <Feather name="star" size={12} color="#FFCF5C" />
                <Feather name="star" size={12} color="#FFCF5C" />
                <Feather name="star" size={12} color="#FFCF5C" />
                <Text>4.5</Text>
            </View>
            
            <Text style={styles.recipeAbout}>
                A receita de bolo de aipim simples é um clássico da culinária brasileira que combina muito bem com aquele cafezinho da tarde. Descubra como fazer bolo de aipim!
            </Text>

            <Image source={require('../../assets/images/Bolo_de_aipim_com_coco.webp')} style={styles.recipeImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    recipe: {
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 16,

        position: 'relative',
    },

    recipeTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
    },

    recipeStars: {
        flexDirection: 'row',
        columnGap: 3,
        alignItems: 'center',
    },

    recipeAbout: {
        fontFamily: 'Poppins-Light',
        marginTop: 13,
        fontSize: 12,
    },

    recipeImage: {
        position: 'absolute',
        width: 100,
        height: 66,
        top: -16,
        right: -16,
        borderRadius: 16,
    }
});

export default Recipe;