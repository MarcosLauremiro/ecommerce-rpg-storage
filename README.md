# RPG Store

Bem-vindo à RPG Store, a sua loja online para itens épicos de RPG! Este projeto apresenta uma página inicial simples para explorar produtos relacionados a jogos de interpretação de papéis (RPG).

## Conteúdo

### Estrutura do HTML

O arquivo HTML (`index.html`) contém a estrutura básica da página, incluindo cabeçalho, seções principais, links para folhas de estilo e scripts JavaScript.

### Cabeçalho
```html
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style/reset.css" />
    <link rel="stylesheet" href="style/style.css" />
    <script src="script/database.js" defer></script>
    <script src="script/index.js" defer></script>
    <title>RPG store</title>
    <link rel="shortcut icon" href="images/favicon-32x32.png" type="image/x-icon">
</head>
```
O cabeçalho define o conjunto de caracteres, a compatibilidade com o navegador, a configuração da viewport, inclui links para folhas de estilo externas e scripts JavaScript. Além disso, há um ícone personalizado para a página.

### Barra de Navegação
```html
<header>
    <div class="header-container">
        <h1 id="home">RPG store</h1>
        <nav>
            <ul class="header-menu">
                <li class="menu_tags">Livros</li>
                <li class="menu_tags">Aneis</li>
                <li class="menu_tags">Mochilas</li>
                <li class="menu_tags">Cintos</li>
            </ul>
        </nav>
    </div>
</header>
```
A barra de navegação exibe o nome da loja e categorias de produtos.

### Seção Principal
```html
<main>
    <section class="main-cards">
        <ul id="cards"></ul>
    </section>
    <section class="main-details">
        <!-- ... -->
    </section>
</main>
```
A seção principal exibe os produtos disponíveis e a seção de detalhes do produto.

### Busca e Carrinho de Compras
```html
<div class="main-search">
    <form id="form" action="">
        <input
            id="pesquisa"
            class="search-input"
            type="text"
            placeholder="Digite aqui sua pesquisa"
        />
        <button class="search-button" type="submit">Pesquisar</button>
    </form>
</div>
<aside>
    <!-- ... -->
</aside>
```
Esta parte inclui um formulário de pesquisa e a seção do carrinho de compras.

### Carrinho de Compras Detalhado
```html
<div class="cart-details">
    <div class="details-values">
        <p>Quantidade:</p><span id="quantidade">0</span>
    </div>
    <div class="details-values">
        <p>Total:</p>
        <span id="valorTotal">R$0,00</span>
    </div>
</div>
```
A seção detalhada do carrinho de compras exibe a quantidade total de itens e o valor total a ser pago.

## Estilos CSS e Scripts JavaScript

Os estilos estão organizados nos arquivos `style.css` e `reset.css`, e os scripts estão presentes nos arquivos `database.js` e `index.js`.

## Como Contribuir

Se você quiser contribuir para este projeto ou sugerir melhorias, sinta-se à vontade para fazer um fork do repositório e enviar suas pull requests.

Agradecemos por explorar a RPG Store! Boas aventuras! 🛡️📚
