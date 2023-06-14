class Receita {

    constructor(
        id,
        title,
        about,
        author,
        image,
        duration,
        difficult,
        portion,
        additionalInformation,
        ingredients,
        methodPreparation,
        categories
    ) {

        this.id = id;
        this.title = title;
        this.about = about;
        this.author = author;
        this.image = image;
        this.duration = duration;
        this.difficult = difficult;
        this.portion = portion;
        this.additionalInformation = additionalInformation;
        this.ingredients = ingredients;
        this.methodPreparation = methodPreparation;
        this.categories = categories;

    }
}

const receita1 = new Receita(
    1,
    'Bolo de Aipim',
    'A receita de bolo de aipim simples é um clássico da culinária brasileira que combina muito bem com aquele cafezinho da tarde. Descubra como fazer bolo de aipim!',
    'Rebecca Corrêa',
    'https://receitinhas.com.br/wp-content/uploads/2016/12/Bolo_de_aipim_com_coco-730x365.jpg',
    '1h',
    'Médio',
    '15 Porções',
    'Espere esfriar para desenformar! Desenformar o bolo de aipim muito cedo ou muito tarde pode acabar com ele bem na reta final. Assim que você retirar o bolo do forno, espere uns 20 minutos e desenforme. E essa receita de bolo de aipim é tão versátil que pode ser encontrada de outras maneiras. Tente preparar o bolo de aipim cremoso e o bolo de aipim cozido!',
    ['1,5 kg de aipim (ou mandioca) ralado', '3 xícaras de leite', '2 colheres (sopa) de margarina ou manteiga', '1 coco pequeno ralado (ou 100 g de coco ralado industrializado)', '3 ovos inteiros', '3 xícaras de açúcar', '1 pitada de sal', '6 gotas de baunilha (opcional)'],
    ['Misture todos os ingredientes em uma bacia grande com a ajuda de um fouet ou uma colher de pau.', 'Leve para assar em forma retangular untada (utilize manteiga para untar e uma folha de papel-toalha para te ajudar) e enfarinhada por, aproximadamente, 45 minutos, em forno previamente aquecido a 180º C.', 'Fica cremoso por dentro e com a casquinha crocante.', 'É delicioso'],
    ['Bolo e tortas doces', 'Bolo de liquidificador', 'Cupcake', 'Bolo de chocolagte', 'Bolo simples', 'Bolo integral', 'Bolo de coco', 'Torta holandesa']
);

export default receita1;