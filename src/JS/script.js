const produtos = [
    ['Notebook Dell', 'Notebook Dell I7 14" 500GB 16RAM', 'Notebook', '7600.99', './src/assets/imgs/notebook dell 1.jpg'],
    ['Notebook Acer', 'Notebook Acer I5 11" 256GB 16RAM', 'Notebook', '3500.00', './src/assets/imgs/notebook acer 1.jpg'],
    ['Notebook Asus', 'Notebook Asus I9 14" 1TB 32RAM', 'Notebook', '9800.00', './src/assets/imgs/notebook asus 1.jpg'],
    ['Celular Iphone', 'Celular Iphone 17 500GB 8RAM', 'Celulares', '7300.59', './src/assets/imgs/iphone 1.png'],
    ['Playstation 5', 'PS5 Slim Wolverine Edition', 'Videogames', '4300', './src/assets/imgs/ps5 1.webp'],
    ['PC Gamer Completo', 'PC Gamer Ryzen 7 7600', 'PC', '6400', './src/assets/imgs/pc gamer 1.webp'],
    ['Nintendo Switch Oled', 'Nintendo Switch', 'Videogames', '3200', './src/assets/imgs/nintendo 1.jpg'],
    ['Mouse Gamer Logitech', 'Mouse Gamer Logitech', 'Periféricos', '220', './src/assets/imgs/mouse gamer 1.avif'],
    ['PS Portal', 'PS Portal PS5', 'Videogames', '1550', './src/assets/imgs/ps portal 1.jpg'],
    ['Fingerboard 38mm', 'Skate de dedo', 'Brinquedos', '120', './src/assets/imgs/skate de dedo 1.jpg'],
    ['Xbox Series S', 'Xbox Series S Fortnite Edition','Videogames', '2800', './src/assets/imgs/xbox series s 1.webp'],
    ['Xbox Series X', 'Xbox Series X Preto', 'Videogames', '4800', './assets/imgs/xbox series x.jpg'],
    ['Samsung S23 Ultra', 'Celular Samsung S23 Ultra 5G 512GB 12GBRAM','Celulares', '7300', './src/assets/imgs/S23 1.jpg'],
    ['Tênis de basquete Nike', 'Tênis Giannis Immort 4 Nike Azul', 'Tênis', '1200', './src/assets/imgs/nike 1.webp'],
    ['Monitor Aoc', "Monitor Curvo Ultra 24'' Led HD", 'Periféricos', '900', './src/assets/imgs/monitor 1.webp']
];
const sectionCard = document.querySelector(".cards");
const pesquisa = document.getElementById('pesquisa');

function criarCard(categoria){
    sectionCard.innerHTML = '';

    categoria.forEach((produto) => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");

        const tituloCard = document.createElement("h2");
        tituloCard.classList.add("titulo");

        const textCard = document.createElement("p");
        const textPreco = document.createElement("h3");

        const categoriaCard = document.createElement('p');
        categoriaCard.textContent = produto[2];

        const img = document.createElement("img");
        img.classList.add("img");
        img.src = produto[4];

        textPreco.classList.add("preco");
        textCard.textContent = produto[1];
        tituloCard.textContent = produto[0];
        textPreco.textContent = `R$${produto[3]}`;

        divCard.appendChild(tituloCard);
        divCard.appendChild(textCard);
        divCard.appendChild(categoriaCard)
        divCard.appendChild(img);
        divCard.appendChild(textPreco);
        sectionCard.appendChild(divCard);
    });
}

function procurarItem(e){
    e.preventDefault();
    const itemProcurado = pesquisa.value.trim();

    let categoria = produtos.filter((produto) => {
        const colunasParaPesquisar = [produto[0], produto[1], produto[2], produto[3]];
        return colunasParaPesquisar.some(coluna => (coluna.toLowerCase().includes(itemProcurado.toLowerCase())))
    })

    if(categoria.length == 0){
        sectionCard.innerHTML = '';
        const textoSemItens = document.createElement("p");
        textoSemItens.textContent = "Item não encontrado :(";
        textoSemItens.style = "color: red; font-size: 2rem;";
        sectionCard.appendChild(textoSemItens);
    } else {
        criarCard(categoria);
    }
}

criarCard(produtos);
pesquisa.addEventListener('input', procurarItem);