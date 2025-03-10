// Variáveis do carrossel
let indiceCarros = 0;
const carrossel = document.getElementById('carrossel');
const carros = document.querySelectorAll('.carro-banner');

// Função para mover o carrossel
function moverCarrossel(direcao) {
    indiceCarros += direcao;
    if (indiceCarros < 0) {
        indiceCarros = carros.length - 1;
    } else if (indiceCarros >= carros.length) {
        indiceCarros = 0;
    }
    carrossel.style.transform = `translateX(-${indiceCarros * 100}%)`;
}

// Carrinho de compras
let carrinho = [];
let total = 0;

// Função para adicionar carros ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;

    // Exibir no carrinho
    atualizarCarrinho();
}

// Função para atualizar a lista do carrinho
function atualizarCarrinho() {
    const carrinhoList = document.getElementById('carrinho-list');
    carrinhoList.innerHTML = ''; // Limpar lista antes de adicionar novamente

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoList.appendChild(li);
    });

    // Atualizar total
    document.getElementById('total').textContent = total.toFixed(2);
}

// Função para finalizar a compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("O carrinho está vazio!");
    } else {
        alert("Compra finalizada com sucesso!");
        carrinho = [];
        total = 0;
        atualizarCarrinho();
    }
}
