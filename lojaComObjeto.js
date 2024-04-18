console.log('oi')

let nomeDoProduto = document.getElementById('nomeDoProduto');
let valorProduto = document.getElementById('valorProduto');
let valorCarrinho = document.getElementById('valorCarrinho');

let carrinho = [];
let totalCarrinho = Number();


let controle = 0;
let totalItens = 0;

function frutaEscolhida(nomeDoProduto){
    nomeDoProduto = nomeDoProduto.value.toLowerCase();

    if(nomeDoProduto == 'banana'){
        return `o valor do item ${nomeDoProduto} é R$ 5,99 Kg `
    }else if(nomeDoProduto == 'laranja'){
        return `O valor do item "${nomeDoProduto}" é RS 4,98 kg`
    }else if(nomeDoProduto == 'maca'){
        return `O valor do item "${nomeDoProduto}" é RS 5,25 kg`
    }else if(nomeDoProduto == 'abacate'){
        return `O valor do item "${nomeDoProduto}" é RS 8,00 kg`
    }else if(nomeDoProduto == 'pera'){
        return `O valor do item "${nomeDoProduto}" é RS 7,75 kg`
    }else{
        return `Digite o nome de um dos produtos disponíveis na loja`
    }
}

valores = () => {
    valorProduto.innerHTML = (frutaEscolhida(nomeDoProduto))
}