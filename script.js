document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        // acessibilidade aria-expanded
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < 2) { // limite máximo
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(1)}rem`;
        }
    });

    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > 0.5) { // limite mínimo
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(1)}rem`;
        }
    });

    // alternar contraste
    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');
    });
});

// Animações ScrollReveal
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#historia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });
