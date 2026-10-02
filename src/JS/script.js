//Array de produtos
const produtos = [
    ['Notebook Dell', 'Notebook Dell I7 14" 500GB 16GB RAM', 'Notebooks e eletrônicos', 7600.99, './src/assets/imgs/notebook dell 1.jpg'],
    ['Notebook Acer', 'Notebook Acer I5 11" 256GB 16GB RAM', 'Notebooks e eletrônicos', 3500.00, './src/assets/imgs/notebook acer 1.jpg'],
    ['Notebook Asus', 'Notebook Asus I9 14" 1TB 32GB RAM', 'Notebooks e eletrônicos', 9800.00, './src/assets/imgs/notebook asus 1.jpg'],
    ['Celular Iphone', 'Celular Iphone 17 500GB 8GB RAM', 'Celulares e eletrônicos', 7300.59, './src/assets/imgs/iphone 1.png'],
    ['Playstation 5', 'PS5 Slim Wolverine Edition', 'Videogames e eletrônicos', 4300.00, './src/assets/imgs/ps5 1.webp'],
    ['PC Gamer Completo', 'PC Gamer Ryzen 7 7600 32GB RAM', 'PCs e eletrônicos', 6400.00, './src/assets/imgs/pc gamer 1.webp'],
    ['Nintendo Switch Oled', 'Nintendo Switch Oled com Mario Kart', 'Videogames e eletrônicos', 3200.00, './src/assets/imgs/nintendo 1.jpg'],
    ['Mouse Gamer Logitech', 'Mouse Gamer Logitech', 'Periféricos e acessórios', 220.00, './src/assets/imgs/mouse gamer 1.avif'],
    ['PS Portal', 'PS Portal PS5', 'Videogames e eletrônicos', 1550.00, './src/assets/imgs/ps portal 1.jpg'],
    ['Fingerboard 38mm', 'Skate de dedo', 'Brinquedos', 120.00, './src/assets/imgs/skate de dedo 1.jpg'],
    ['Xbox Series S', 'Xbox Series S Fortnite Edition','Videogames e eletrônicos', 2800.00, './src/assets/imgs/xbox series s 1.webp'],
    ['Xbox Series X', 'Xbox Series X Preto', 'Videogames e eletrônicos', 4800.00, './src/assets/imgs/xbox series x.jpg'],
    ['Samsung S23 Ultra', 'Celular Samsung S23 Ultra 5G 512GB 12GB RAM','Celulares e eletrônicos', 7300.00, './src/assets/imgs/S23 1.jpg'],
    ['Tênis de basquete Nike', 'Tênis Giannis Immort 4 Nike Azul', 'Tênis', 1200.00, './src/assets/imgs/nike 1.webp'],
    ['Monitor Aoc', "Monitor Curvo Ultra 24'' Led HD", 'Periféricos e acessórios', 900.00, './src/assets/imgs/monitor 1.webp'],
    ['Headset Gamer', 'Headset Gamer Logitech com Led RGB', 'Periféricos e acessórios', 250.00, './src/assets/imgs/fone 1.jpg']
];

const itensNoCarrinho = [];

//Mapeamento dos itens do HTML
const sectionCard = document.querySelector(".cards");
const pesquisa = document.getElementById('pesquisa');
const btnTodos = document.getElementById('btn-todos');
const btnNotebooks = document.getElementById('btn-notebooks');
const btnCelulares = document.getElementById('btn-celulares');
const btnVideogames = document.getElementById('btn-videogames');
const btnCarrinho = document.getElementById('btn-carrinho');
const sectionCarrinho = document.getElementById('section-carrinho');
const listaCarrinho = document.getElementById('lista-carrinho');
const esvaziarCarrinhoBtn = document.getElementById('esvaziar-carrinho-btn');
const fecharCarrinhoBtn = document.getElementById('fechar-carrinho-btn');
const precoTotalCarrinho = document.getElementById('preco-total-carrinho');

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

        const addCarrinhoBtn = document.createElement('button');
        addCarrinhoBtn.textContent = 'Adicionar ao carrinho';
        addCarrinhoBtn.classList.add('add-carrinho-btn');
        addCarrinhoBtn.addEventListener('click', () => adicionarCarrinho(produto));

        textPreco.classList.add("preco");
        textCard.textContent = produto[1];
        tituloCard.textContent = produto[0];
        textPreco.textContent = `R$ ${String(produto[3]).replace('.' , ',')}`;
        
        divInfo.appendChild(textCard);
        divInfo.appendChild(categoriaCard)
        
        divCard.appendChild(divImg);
        divCard.appendChild(tituloCard);
        divCard.appendChild(divInfo);
        divCard.appendChild(textPreco);
        divCard.appendChild(addCarrinhoBtn);

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
        const colunasParaPesquisar = [produto[0], produto[1], produto[2]];
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

//Adiciona o item desejado ao carrinho
function adicionarCarrinho(produtoParaAdicionar) {
    const jaExiste = itensNoCarrinho.find(produto => produto === produtoParaAdicionar);

    if(jaExiste) {
        alert("Esse item já está no carrinho!");
    } else {
        itensNoCarrinho.push(produtoParaAdicionar);
        alert('Item adicionado ao carrinho com sucesso!');
    }
}

//Renderiza o carrinho com os itens presentes no array itensNoCarrinho
function renderizarCarrinho() {
    sectionCarrinho.classList.add('show');
    listaCarrinho.innerHTML = '';
    let precoTotal = 0;

    itensNoCarrinho.forEach((produto) => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = produto[0];
        const preco = document.createElement('p');
        preco.textContent = `R$${produto[3].toFixed(2).replace('.', ',')}`;
        preco.classList.add('preco-item-carrinho');

        precoTotal += produto[3];

        const removerItemCarrinhoBtn = document.createElement('button');
        const imgProduto = document.createElement('img');
        imgProduto.src = produto[4];
        imgProduto.classList.add('img-carrinho');

        removerItemCarrinhoBtn.setAttribute('id', 'remover-item-carrinho');
        removerItemCarrinhoBtn.innerHTML = '<img src="./src/assets/icons/excluirItemCarrinho.png" alt"Remover item">';
        removerItemCarrinhoBtn.addEventListener('click', () => removerItemCarrinho(produto));

        li.appendChild(imgProduto);
        li.appendChild(p);
        li.appendChild(preco);
        li.appendChild(removerItemCarrinhoBtn);
        listaCarrinho.appendChild(li);
    });

    precoTotalCarrinho.textContent = `R$${precoTotal.toFixed(2).replace('.', ',')}`;
}

//Remove o item desejado do carrinho
function removerItemCarrinho(produtoParaRemover) {
    const itemParaRemover = itensNoCarrinho.findIndex((produto) => produto === produtoParaRemover);
    itensNoCarrinho.splice(itemParaRemover, 1);
    renderizarCarrinho();
}

//Acionamento das funções de acordo com a intenção de uso
criarCard(produtos);
pesquisa.addEventListener('input', procurarItem);
btnNotebooks.addEventListener('click', () => procurarItem('Notebooks'));
btnCelulares.addEventListener('click', () => procurarItem('Celulares'));
btnVideogames.addEventListener('click', () => procurarItem('Videogames'));

btnTodos.addEventListener('click', () => {
    pesquisa.value = '';
    criarCard(produtos);
});

btnCarrinho.addEventListener('click', renderizarCarrinho);

esvaziarCarrinhoBtn.addEventListener('click', () => {
    itensNoCarrinho.length = 0;
    renderizarCarrinho();
});

fecharCarrinhoBtn.addEventListener('click', () => sectionCarrinho.classList.remove('show'));