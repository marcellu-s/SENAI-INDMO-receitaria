import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons, AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

const HeaderRecipe = () => {
    const [fontsLoaded] = useFonts({
        'Poppins-Light': require('../../assets/fonts/Poppins/Poppins-Light.ttf'),
        'Poppins-Regular': require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <View style={styles.header}>
                <View style={styles.navbar}> 
                    <Ionicons name="arrow-back-circle-outline" size={37} color="black" />
                    <AntDesign name="hearto" size={32} color="#FE8A07" />
                </View>
                <Text style={styles.title}>Bolo De Aipim</Text>
                <View style={styles.imageContainer}>
                    <Image source={require('../../../assets/Images/Bolo-de-Aipim.jpg')} style={styles.image} resizeMode="cover" />
                </View>
                
                <View style={styles.user}>
                    <FontAwesome style={styles.userby} name="user-circle-o" size={32} color="#717171" />
                    <Text style={styles.usertext}>Por: Manoel Gomes</Text>
                </View>
                <View style={styles.recipedetails}>
                    <View style={styles.details}>
                        <Text style={styles.detailsTitle}>
                            Tempo de preparo
                        </Text>
                        <View style={styles.time}>
                            <Ionicons name="ios-alarm-outline" size={24} color="#333" />
                            <Text style={styles.textdetails}>
                                1h
                            </Text>
                        </View>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsTitle}>
                            Rende
                        </Text>

                        <Text style={styles.textdetails}>
                            15 Porções
                        </Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsTitle}>
                            Dificuldade
                        </Text>

                        <Text style={styles.difficult}>
                            Médio
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.main}>
                <View style={styles.ingredients}>
                    <Text style={styles.ingredientsTitle}>Ingredientes</Text>
                    <View style={styles.ingredientsList}>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>1,5 kg de aipim (mandioca) ralado</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>3 xícaras de leite</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>2 colheres (sopa) de margarina ou manteiga</Text>
                        </View>
                        
                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>1 coco pequeno ralado (ou 100 g de coco ralado industrializado)</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>3 ovos inteiros</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>3 xícaras de açúcar</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.prepare}>
                    <Text style={styles.ingredientsTitle}>Modo de Preparo</Text>
                    <View style={styles.ingredientsList}>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>1,5 kg de aipim (mandioca) ralado</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>3 xícaras de leite</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>2 colheres (sopa) de margarina ou manteiga</Text>
                        </View>
                        
                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>1 coco pequeno ralado (ou 100 g de coco ralado industrializado)</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>3 ovos inteiros</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.itenstext}>3 xícaras de açúcar</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {

    },
    title: {
        marginTop: 21,
        textAlign: 'center',
        fontSize: 32,
        color: '#333',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold'
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageContainer: {
        width:'100%',   
        alignItems:'center',     
        marginTop: 32,
        maxHeight:225,
        borderColor: 'gray',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius:16,
    },

    user:{
        flexDirection:'row',
        marginTop:17,
        alignItems:'center',
        marginBottom:32,
    },

    userby:{
        marginLeft:75,
    },

    usertext:{
        marginLeft: 15,
        fontFamily: 'Poppins',
        fontSize:16,
    },
    recipedetails:{
        borderTopWidth:1,
        borderBottomWidth:1,
        height:105,
        borderColor:'#999999',
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'center',
    },

    details:{
        alignItems:'center',
        gap:16,
    },

    time:{
        flexDirection:'row',
        gap:8,
        alignItems:'center',
    },

    detailsTitle:{
        fontFamily: 'Poppins-Bold',
        fontSize:15,
        color:'#333'
    },
    difficult:{
        color:'#FE8A07',
        fontSize:14,
        fontFamily:'Poppins-Bold'
    },

    textdetails:{
        fontSize:14,
        fontFamily:'Poppins-Bold'
    },

    main:{
        marginTop:32,
    },

    ingredients:{
        color:'#fff',
        width:'100%',  
        alignItems:'center', 
        borderBottomWidth:0.5,
        borderBottomColor:'#717171',
    },

    prepare:{
        color:'#fff',
        width:'100%',  
        alignItems:'center', 
        borderBottomWidth:0.5,
        borderBottomColor:'#717171',
    },

    ingredientsTitle:{
        fontFamily: 'Poppins-Bold', 
        fontSize:24,
        gap:32,
        marginBottom:32,
        color:'#333'
    },

    ingredientsList:{
        alignItems:'flex-start',
        width:'100%',
        gap:16,
        marginBottom:32,
    },

    ingredientitem:{
        fontFamily:'Poppins-Regular',
        flexDirection:'row',
        justifyContent:'flex-start',
        gap:16,
        textAlign: 'left', 
        alignItems:'center'
    },
    itenstext:{
        fontSize:16,
        fontFamily:'Poppins-Regular',
    },
});

export default HeaderRecipe;
