let charuto = 120.00;
let whisky = 230.00;
let vodka = 75.00;
let cachaca = 46.00;
let cerveja = 12.00;
let vinho = 99.00;
let agua = 2.50;
let refrigerante = 5.40;

let nomeDoProduto = document.getElementById
('nomeDoProduto');

let valorProduto = document.getElementById ('valorProduto');

function teste(){


    switch(nomeDoProduto.value){
        case 'charuto':
            valorProduto.innerHTML = " O valor do charuto é R$" + charuto.toFixed(2);
            break
    }
}


