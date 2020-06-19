const cards = document.querySelectorAll('.card');
const ingredientes = document.querySelector('.listaingredientes')

for (let card of cards) {
    card.addEventListener("click", function () {
        const cardIndice = card.getAttribute("indice")
        window.location.href = `/detalhes/${cardIndice}`
    })
}

document.querySelector('#escondermostrar-ingre').addEventListener("click",function(){
    let texto = document.querySelector('#escondermostrar-ingre').innerHTML
    if(texto === "ESCONDER"){
        ingredientes.classList.add('noActive')
        document.querySelector('#escondermostrar-ingre').innerHTML = "MOSTRAR"
    }
    if(texto === "MOSTRAR"){
        ingredientes.classList.remove('noActive')
        document.querySelector('#escondermostrar-ingre').innerHTML = "ESCONDER"
    }
    
})