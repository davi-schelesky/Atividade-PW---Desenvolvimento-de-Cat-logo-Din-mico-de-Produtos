//Array de produtos
const produtos = [
    ['Notebook Dell', 'Notebook Dell I7 14" 500GB 16GB RAM', 'Notebooks', '7600,99', './src/assets/imgs/notebook dell 1.jpg'],
    ['Notebook Acer', 'Notebook Acer I5 11" 256GB 16GB RAM', 'Notebooks', '3500,00', './src/assets/imgs/notebook acer 1.jpg'],
    ['Notebook Asus', 'Notebook Asus I9 14" 1TB 32GB RAM', 'Notebooks', '9800,00', './src/assets/imgs/notebook asus 1.jpg'],
    ['Celular Iphone', 'Celular Iphone 17 500GB 8GB RAM', 'Celulares', '7300,59', './src/assets/imgs/iphone 1.png'],
    ['Playstation 5', 'PS5 Slim Wolverine Edition', 'Videogames', '4300,00', './src/assets/imgs/ps5 1.webp'],
    ['PC Gamer Completo', 'PC Gamer Ryzen 7 7600 32GB RAM', 'PCs', '6400,00', './src/assets/imgs/pc gamer 1.webp'],
    ['Nintendo Switch Oled', 'Nintendo Switch', 'Videogames', '3200,00', './src/assets/imgs/nintendo 1.jpg'],
    ['Mouse Gamer Logitech', 'Mouse Gamer Logitech', 'Periféricos', '220,00', './src/assets/imgs/mouse gamer 1.avif'],
    ['PS Portal', 'PS Portal PS5', 'Videogames', '1550,00', './src/assets/imgs/ps portal 1.jpg'],
    ['Fingerboard 38mm', 'Skate de dedo', 'Brinquedos', '120,00', './src/assets/imgs/skate de dedo 1.jpg'],
    ['Xbox Series S', 'Xbox Series S Fortnite Edition','Videogames', '2800,00', './src/assets/imgs/xbox series s 1.webp'],
    ['Xbox Series X', 'Xbox Series X Preto', 'Videogames', '4800,00', './src/assets/imgs/xbox series x.jpg'],
    ['Samsung S23 Ultra', 'Celular Samsung S23 Ultra 5G 512GB 12GB RAM','Celulares', '7300,00', './src/assets/imgs/S23 1.jpg'],
    ['Tênis de basquete Nike', 'Tênis Giannis Immort 4 Nike Azul', 'Tênis', '1200,00', './src/assets/imgs/nike 1.webp'],
    ['Monitor Aoc', "Monitor Curvo Ultra 24'' Led HD", 'Periféricos', '900,00', './src/assets/imgs/monitor 1.webp']
];

//Mapeamento dos itens do HTML
const sectionCard = document.querySelector(".cards");
const pesquisa = document.getElementById('pesquisa');
const btnTodos = document.getElementById('btn-todos');
const btnNotebooks = document.getElementById('btn-notebooks');
const btnCelulares = document.getElementById('btn-celulares');
const btnVideogames = document.getElementById('btn-videogames');

//Função para criar os cards
function criarCard(categoria){
    sectionCard.innerHTML = '';

    categoria.forEach((produto) => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");
        const divInfo = document.createElement('div');
        divInfo.classList.add('divInfo');

        const tituloCard = document.createElement("h2");
        tituloCard.classList.add("titulo");

        const textCard = document.createElement("p");
        const textPreco = document.createElement("h3");

        const categoriaCard = document.createElement('p');
        categoriaCard.textContent = `Categoria: ${produto[2]}`;

        const divImg = document.createElement('div');
        divImg.classList.add('divImg');
        const img = document.createElement("img");
        img.classList.add("img");
        img.src = produto[4];
        divImg.appendChild(img);

        textPreco.classList.add("preco");
        textCard.textContent = produto[1];
        tituloCard.textContent = produto[0];
        textPreco.textContent = `R$ ${produto[3]}`;
        
        divInfo.appendChild(textCard);
        divInfo.appendChild(categoriaCard)
        divInfo.appendChild(textPreco);
        
        divCard.appendChild(divImg);
        divCard.appendChild(tituloCard);
        divCard.appendChild(divInfo);

        sectionCard.appendChild(divCard);
    });
}

//Função de procurar os itens desejados
function procurarItem(pesquisaDesejada){
    let itemProcurado;

    //Verifica se a função foi chamada pelo input ou pelas categorias do header
    if(typeof pesquisaDesejada == 'string' && pesquisaDesejada) {
        itemProcurado = pesquisaDesejada;
    } else {
        itemProcurado = pesquisa.value.trim();
    }

    //Realiza o filtro desejado
    let categoria = produtos.filter((produto) => {
        const colunasParaPesquisar = [produto[0], produto[1], produto[2], produto[3]];
        return colunasParaPesquisar.some(coluna => (coluna.toLowerCase().includes(itemProcurado.toLowerCase())));
    })

    //Se o filtro não corresponder a nenhum produto
    if(categoria.length == 0) {
        sectionCard.innerHTML = '';

        const textoSemItens = document.createElement("p");
        textoSemItens.textContent = "Item não encontrado :(";
        textoSemItens.style = "color: #1F2937; font-size: 2rem;";

        sectionCard.appendChild(textoSemItens);
    } else {
        criarCard(categoria);
    }
}

//Acionamento das funções de acordo com a intenção de uso
criarCard(produtos);
pesquisa.addEventListener('input', procurarItem);
btnNotebooks.addEventListener('click', () => procurarItem('Notebooks'));
btnCelulares.addEventListener('click', () => procurarItem('Celulares'));
btnVideogames.addEventListener('click', () => procurarItem('Videogames'));
btnTodos.addEventListener('click', procurarItem);