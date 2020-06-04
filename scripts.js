const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener("click", function () {
        const srcImg = card.querySelector("img").src
        const nomeReceita = card.querySelector("h4").innerHTML
        const nomeCriador = card.querySelector("p").innerHTML
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src = srcImg
        modalOverlay.querySelector("#nome-receita").innerHTML = nomeReceita
        modalOverlay.querySelector("#nome-criador").innerHTML = nomeCriador
    })
}

document.querySelector('.close-modal').addEventListener("click", function () {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("img").src = ""
    modalOverlay.querySelector("#nome-receita").innerHTML = ""
    modalOverlay.querySelector("#nome-criador").innerHTML = ""
})