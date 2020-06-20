const cards = document.querySelectorAll('.card');
const informacoe = document.querySelectorAll('.detalher-conteudo')

for (let card of cards) {
    card.addEventListener("click", function () {
        const cardIndice = card.getAttribute("indice")
        window.location.href = `/detalhes/${cardIndice}`
    })
}

for (let info of informacoe) {
    info.querySelector('.botao-escondermostrar').addEventListener("click", function () {
        if (info.querySelector('.botao-escondermostrar').innerHTML === "ESCONDER") {
            info.querySelector('.caixa-escondermostrar').classList.add('noActive')
            info.querySelector('.botao-escondermostrar').innerHTML = "MOSTRAR"
        } else{
            info.querySelector('.caixa-escondermostrar').classList.remove('noActive')
            info.querySelector('.botao-escondermostrar').innerHTML = "ESCONDER"
        }
    })
}

document.querySelector('.img').addEventListener("click", function(){
    window.location.href = '/'
})