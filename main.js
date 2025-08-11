'use strict'

function criarImagem (imagem) {
    const galeria = document.getElementById('galeria')
    const img = document.createElement('img')
    img.src = imagem.url

    const container = document.createElement('div')
    container.className = 'imagem-container'

    const legenda = document.createElement('div')
    legenda.className = 'legenda'
    legenda.textContent = imagem.texto || `Imagem ${imagem.nome}`

    container.appendChild(img)
    container.appendChild(legenda)
    galeria.appendChild(container)
}

function carregarImagens() {

    

    const imagens = [
        {
        nome: 'barkley',
        url: './img/barkley.jpg',
        texto: 'Barkley'
    },
        {
        nome: 'everton full pop',
        url: './img/everton_full_pop.jpg',
        texto: 'Everton Full Pop'
    },
        {
        nome: 'everton full',
        url: './img/everton_full.jpg',
        texto: 'Everton pop'
    },
        {
        nome: 'everton streng',
        url: './img/everton_streg.jpg',
        texto: 'Everton Streng'
    },
        {
        nome: 'pop',
        url: './img/pop.jpg'
    },
        {
        nome: 'Theo Wanne',
        url: './img/theo_wanne.jpg'
    },
        {
        nome: 'Theo Water',
        url: './img/theo_water.jpg'
    },
        {
        nome: 'Theo',
        url: './img/vandoren.jpg'
    },
        {
        nome: 'yamaha',
        url: './img/yamaha.jpg'
    },
        {
        nome: 'gianni',
        url: './img/Gianni.jpg'
    }
      
    ]

    const galeria = document.getElementById('galeria')

    // let contador = 0
    // const limite = imagens.length
    // while (contador < limite){
    //     console.log(imagens[contador])
    //     contador ++

    // }

    imagens.forEach(criarImagem)
}

carregarImagens() 





// "./img/barkley_malbec.jpg",
        // "./img/everton_full_pop.jpg",
        // "./img/everton_full.jpg",
        // "./img/everton_streg.jpg",
        // "./img/Gianni.jpg",
        // "./img/pop.jpg",
        // "./img/theo_wanne.jpg",
        // "./img/theo_water.jpg",
        // "./img/vandoren.jpg",
        // "./img/yamaha.jpg"