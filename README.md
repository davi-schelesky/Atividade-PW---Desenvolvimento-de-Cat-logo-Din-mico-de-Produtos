# 🎮 DGames - Filtro de Produtos com Pesquisa Inteligente e Carrinho

Este é um projeto front-end de um catálogo de produtos para uma loja de eletrônicos e games (DGames). O principal objetivo do projeto é demonstrar a manipulação do DOM, a filtragem de dados em tempo real e o gerenciamento de estado (carrinho de compras) utilizando JavaScript puro (Vanilla JS).

## ✨ Funcionalidades

* **Renderização Dinâmica:** Os produtos são gerados dinamicamente na tela a partir de um array de dados no JavaScript, facilitando a adição de novos itens.
* **Pesquisa Inteligente em Tempo Real:** Uma barra de pesquisa que filtra os produtos instantaneamente conforme o usuário digita. A busca procura correspondências no Nome do produto, Descrição e Categoria.
* **Filtros por Categoria:** Botões de acesso rápido no cabeçalho para filtrar facilmente por "Todos", "Notebooks", "Celulares" e "Videogames".
* **Carrinho de Compras:** Sistema completo de carrinho onde o usuário pode:
  * Adicionar produtos (com validação para evitar itens duplicados).
  * Visualizar os itens adicionados em um modal interativo.
  * Remover itens específicos do carrinho.
  * Esvaziar o carrinho completamente.
  * Visualizar o cálculo do preço total em tempo real.
* **Feedback Visual:** Caso a pesquisa não encontre nenhum produto correspondente, uma mensagem de "Item não encontrado :(" é exibida para o usuário.
* **Interface Responsiva e Moderna:** Design construído com CSS3, utilizando Flexbox para alinhamento, variáveis de cor (`:root`) para padronização, cabeçalho fixo (sticky) e efeitos de transição.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página.
* **CSS3:** Estilização, layout em Flexbox, variáveis nativas (Custom Properties), fontes personalizadas (Google Fonts - Poppins) e design responsivo.
* **JavaScript:** Lógica de programação, manipulação avançada do DOM, escuta de múltiplos eventos e métodos de array (`filter`, `some`, `forEach`, `includes`, `find`, `findIndex`, `splice`, `push`).

## 📁 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```text
├── src/
│   ├── assets/
│   │   ├── imgs/      # Imagens dos produtos
│   │   └── icons/     # Ícones da interface (carrinho, pesquisa, lixeira, etc.)
│   ├── CSS/
│   │   └── style.css  # Arquivo de estilização principal
│   └── JS/
│       └── script.js  # Lógica de renderização, pesquisa e carrinho
└── index.html         # Estrutura principal da página
```

## 🚀 Como Executar o Projeto

1. Faça o clone deste repositório ou baixe os arquivos.
2. Certifique-se de que a estrutura de pastas está correta (como mostrado acima).
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador padrão (Google Chrome, Firefox, Edge, etc.).
4. Use a barra de pesquisa, clique nos filtros de categoria e adicione produtos ao carrinho para testar as funcionalidades!

## 💡 Aprendizados

Este projeto foi excelente para praticar:
* A criação e remoção de elementos HTML via JavaScript (`document.createElement`, `innerHTML`).
* O gerenciamento de estado mantendo um array separado para os itens do carrinho.
* A formatação e cálculo matemático de valores monetários (conversão de `.` para `,` e soma de totais).
* A utilização de métodos avançados de array em JS para criar um sistema de busca e filtragem eficiente.

---
Desenvolvido com dedicação e muito código! 💻