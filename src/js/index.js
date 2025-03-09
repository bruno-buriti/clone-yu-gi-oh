const btnAvancar = document.getElementById('btn_avancar');
const btnVoltar = document.getElementById('btn_voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

cartoes.forEach((cartao) => {
    cartao.addEventListener('click', function(){
        const cartaVirada = cartao.querySelector('.carta_virada');
        cartao.classList.toggle('virar');
        cartaVirada.classList.toggle('mostrar_fundo_carta');
        const descricao = cartao.querySelector('.descricao');
        descricao.classList.toggle('esconder');
        const nivelCarta = cartao.querySelector('.nivel_carta');
        nivelCarta.classList.toggle('esconder');
    });
});

btnAvancar.addEventListener('click', function(){
    if(cartaoAtual === cartoes.length-1) return;
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function(){
    if(cartaoAtual === 0) return;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

function mostrarCartao(cartaoAtual) {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}