# 🎮 DGames - Filtro de Produtos com Pesquisa Inteligente

Este é um projeto front-end de um catálogo de produtos para uma loja de eletrônicos e games (DGames). O principal objetivo do projeto é demonstrar a manipulação do DOM e a filtragem de dados em tempo real utilizando JavaScript puro (Vanilla JS).

## ✨ Funcionalidades

* **Renderização Dinâmica:** Os produtos são gerados dinamicamente na tela a partir de um array de dados no JavaScript, facilitando a adição de novos itens.
* **Pesquisa Inteligente em Tempo Real:** Uma barra de pesquisa que filtra os produtos instantaneamente conforme o usuário digita. A busca é abrangente e procura correspondências no:
  * Nome do produto
  * Descrição
  * Categoria
  * Preço
* **Feedback Visual:** Caso a pesquisa não encontre nenhum produto correspondente, uma mensagem de "Item não encontrado :(" é exibida para o usuário.
* **Interface Responsiva e Animada:** Design limpo e moderno construído com CSS3, utilizando Flexbox para o alinhamento dos cards e efeitos de transição (hover) para melhor interatividade.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da página.
* **CSS3:** Estilização, layout em Flexbox, variáveis de cor, fontes personalizadas (Google Fonts - Poppins) e animações de hover.
* **JavaScript:** Lógica de programação, manipulação do DOM, escuta de eventos (`addEventListener`) e métodos de array (`filter`, `some`, `forEach`, `includes`).

## 📁 Estrutura do Projeto

O projeto está organizado da seguinte forma:

```text
├── assets/
│   └── imgs/          # Imagens dos produtos
├── src/
│   ├── CSS/
│   │   └── style.css  # Arquivo de estilização
│   └── JS/
│       └── script.js  # Lógica de renderização e pesquisa
└── index.html         # Estrutura principal da página
```

## 🚀 Como Executar o Projeto

1. Faça o clone deste repositório ou baixe os arquivos.
2. Certifique-se de que a estrutura de pastas está correta (como mostrado acima) e que as imagens estão na pasta `assets/imgs/`.
3. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador padrão (Google Chrome, Firefox, Edge, etc.).
4. Use a barra de pesquisa no topo da página para testar o filtro de produtos!

## 💡 Aprendizados

Este projeto foi excelente para praticar:
* A criação de elementos HTML via JavaScript (`document.createElement`).
* A injeção de conteúdo dinâmico na tela.
* A utilização de métodos avançados de array em JS para criar um sistema de busca eficiente sem precisar recarregar a página.

---
Desenvolvido com dedicação e muito código! 💻