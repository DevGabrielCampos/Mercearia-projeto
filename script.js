let banana = 9.90;
let laranja = 4.98;
let maca = 5.25;
let abacate = 8;
let pera = 7.75;

let carrinho = [];

let contadorDeBananas = 0;
let contadorDeLaranja = 0;
let contadorDeMaca = 0;
let contadorDeAbacate = 0;
let contadorDePera = 0;


let nomeDoProduto = document.getElementById("nomeDoProduto");

let valorProduto = document.getElementById("valorProduto");

let valorFinal = document.getElementById('valorFinal')

function valores(){

    switch(nomeDoProduto.value.toLowerCase()){
        case 'banana':
            valorProduto.innerHTML = "O valor da Banana é R$ " + banana.toFixed(2);
        break
        case 'laranja':
            valorProduto.innerHTML = "O valor da laranja é R$ " + laranja.toFixed(2);
        break;
        case 'maca':
            case 'maçã':
            valorProduto.innerHTML = "O valor da maçã é R$ " + maca.toFixed(2);
        break;
        case 'abacate':
            valorProduto.innerHTML = "O valor da abacate é R$ "  + abacate.toFixed(2);
        break;
        case 'pera':
            valorProduto.innerHTML = "O valor da Pêra é R$ " + pera.toFixed(2);
        break;
        default:
            valorProduto.innerHTML = "Fruta indisponível"       
    }
}

function addCarrinho(){

    if(nomeDoProduto.value.toLowerCase() == 'banana'){
        contadorDeBananas ++;
        carrinho.push(nomeDoProduto.value.toLowerCase())
    }
    if(nomeDoProduto.value == 'laranja'){
        contadorDeLaranja ++;
        carrinho.push(nomeDoProduto.value)
    }
    if(nomeDoProduto.value == 'maca'){
        contadorDeMaca ++;
        carrinho.push(nomeDoProduto.value)
    }
    if(nomeDoProduto.value == 'abacate'){
        contadorDeAbacate ++;
        carrinho.push(nomeDoProduto.value)
    }
    if(nomeDoProduto.value == 'pera'){
        contadorDePera ++;
        carrinho.push(nomeDoProduto.value)
    }

    
    console.log(contadorDeBananas, contadorDeLaranja, contadorDeMaca,contadorDeAbacate,contadorDePera)

    console.log(carrinho)
   
}

function totalCompra(){

let totalCompra = (banana * contadorDeBananas) + (laranja * contadorDeLaranja) + (maca * contadorDeMaca) + (abacate * contadorDeAbacate) + (pera * contadorDePera);
console.log(totalCompra)

let totalDeItens = contadorDeBananas + contadorDeLaranja +  contadorDeMaca + contadorDeAbacate + contadorDePera

valorFinal.innerHTML = `Total de itens no carrinho é: ${totalDeItens}
\nValor total da compra: R$ ${totalCompra.toFixed(2)}`

}