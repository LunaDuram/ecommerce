let qtdItens = 0;

function adicionar() {
    qtdItens++;
    document.querySelector('.mudar').innerHTML = qtdItens;
}


function diminuir() {
    if (qtdItens > 0){
        qtdItens--;
    document.querySelector('.mudar').innerHTML = qtdItens;
    }
}
