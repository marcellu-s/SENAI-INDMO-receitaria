import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign, FontAwesome, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const RecipeLayout = () => {

    const navigation = useNavigation();
    
    return (
        <View>
            <View>
                <View style={styles.navbar}> 
                    <Pressable onPress={() => navigation.navigate('Home')}>
                        <Ionicons name="arrow-back-circle-outline" size={32} color="black" />   
                    </Pressable>
                    <AntDesign name="hearto" size={28} color="#FE8A07" />
                </View>
                <Text style={{fontSize: 32, fontFamily: 'Poppins-Bold', textAlign: 'center', marginTop: 21}}>Bolo De Aipim</Text>
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/images/Bolo-de-Aipim.jpg')} style={styles.image} resizeMode="cover" />
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
                    <Text style={styles.title}>Ingredientes</Text>
                    <View style={styles.ingredientsList}>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.text}>1,5 kg de aipim (mandioca) ralado</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.text}>3 xícaras de leite</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.text}>2 colheres (sopa) de margarina ou manteiga</Text>
                        </View>
                        
                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.text}>1 coco pequeno ralado (ou 100 g de coco ralado industrializado)</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.text}>3 ovos inteiros</Text>
                        </View>

                        <View style={styles.ingredientitem}>
                            <Entypo name="check" size={20} color="black" />
                            <Text style={styles.text}>3 xícaras de açúcar</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.prepare}>
                    <Text style={styles.title}>Modo de Preparo</Text>
                    <View style={{gap: 24, marginBottom: 32}}>
                        <View style={styles.prepareItem}>
                            <MaterialCommunityIcons name="numeric-1-circle-outline" size={24} color="black" />
                            <Text style={styles.text}>Misture todos os ingredientes em uma bacia grande com a ajuda de um fouet ou uma colher de pau.</Text>
                        </View>
                        <View style={styles.prepareItem}>
                            <MaterialCommunityIcons name="numeric-2-circle-outline" size={24} color="black" />
                            <Text style={styles.text}>Leve para assar em forma retangular untada (utilize manteiga para untar e uma folha de papel-toalha para te ajudar) e enfarinhada por, aproximadamente, 45 minutos, em forno previamente aquecido a 180º C.</Text>
                        </View>
                        <View style={styles.prepareItem}>
                            <MaterialCommunityIcons name="numeric-3-circle-outline" size={24} color="black" />
                            <Text style={styles.text}>Fica cremoso por dentro e com a casquinha crocante.</Text>
                        </View>
                        <View style={styles.prepareItem}>
                            <MaterialCommunityIcons name="numeric-4-circle-outline" size={24} color="black" />
                            <Text style={styles.text}>É delicioso!</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginVertical: 32, backgroundColor: '#333', padding: 16, borderRadius: 16}}>
                    <Text style={{textAlign: 'center', marginBottom: 16, fontFamily: 'Poppins-Bold', fontSize: 24, color: '#FE8A07'}}>Avalie essa receita!</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8}}>
                        <Feather name="star" size={24} color="#FFCF5C" />
                        <Feather name="star" size={24} color="#FFCF5C" />
                        <Feather name="star" size={24} color="#FFCF5C" />
                        <Feather name="star" size={24} color="#FFCF5C" />
                        <Feather name="star" size={24} color="#FFCF5C" />
                    </View>
                </View>
                <View style={{borderWidth: 1, borderColor: '#999', padding: 32, borderRadius: 16, marginBottom: 32}}>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 24, color:'#333', marginBottom: 16, textAlign: 'center',}}>Informações adicionais</Text>
                    <Text style={{fontFamily: 'Poppins-Light', fontSize: 16, color:'#333', marginBottom: 32, textAlign: 'center',}}>Dicas para fazer uma lasanha de carne moída perfeita</Text>
                    <Text style={{fontFamily: 'Poppins-Regular', fontSize: 16, color:'#333', textAlign: 'justify', }}>
                        A receita de lasanha de carne moída, também conhecida como lasanha à bolonhesa, é um clássico! Aliás, você sabia que a lasanha é um prato superfamoso no mundo inteiro? Ela pode ter vários molhos e recheios. Seu nome deriva da sua montagem em camadas: lasanha significa "pote de cozinhar".
                        Receita de lasanha nunca tem certo ou errado, cada um tem a sua, normalmente passada de geração em geração, certo? Mas se você ainda tem dúvidas sobre como fazer lasanha de carne moída ou de qualquer outro sabor, confira esta matéria do blog do TudoGostoso para saber tudo: como congelar lasanha, como fazer massa de lasanha e mais!
                        E quem resiste a uma boa lasanha à bolonhesa? Impossível não ficar com água na boca! E se for a receita de lasanha simples é melhor ainda. É óbvio que no TudoGostoso você encontra muitos truques e dicas para esse prato que é sucesso nos almoços de família, dentre eles temos: como fazer a lasanha perfeita e escolher os melhores ingredientes para lasanha.
                    </Text>
                </View>
                <View>
                    <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16, color: '#333'}}>Categorias relacionadas</Text>
                    <View style={styles.categoriesWrapper}> 
                        <TouchableOpacity style={styles.categorie}>
                            <Text style={styles.categorieText}>Massas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.categorie}>
                            <Text style={styles.categorieText}>Massas</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

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
        justifyContent: 'center',
        gap: 16,
        marginBottom:32,
    },

    usertext:{
        fontFamily: 'Poppins-Regular',
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
        marginTop: 32,
    },

    title: {
        fontFamily: 'Poppins-Bold', 
        fontSize: 24,
        color:'#333',
        marginBottom: 32,
        textAlign: 'center',
    },

    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#333',
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
        alignItems:'center',
    },

    prepareItem: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 16,
        maxWidth: '100%'
    }, 

    categoriesWrapper: {
        marginTop: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
    },

    categorie: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#333',
        borderRadius: 16,
    },

    categorieText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: '#FE8A07',
        verticalAlign: 'middle'
    }
});

export default RecipeLayout;
