const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 
'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

let word = 'Camiseta';

find(word, products);

function find(word, products) {
    products.forEach(element => {
        
        if(element.includes(word)) {

            console.log(`Este elemento: "${element}", lleva la palabra "${word}".` );
        }
    });
}