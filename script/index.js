
// id: 1,
// img: "images/anel_cavaleiro.png",
// nameItem: "Anel do Poder do Cavaleiro",
// description:
//   "Adicione mais estilo à sua armadura de cavaleiro e proteja seu dedo.",
// value: 62,
// addCart: "Adicionar ao carrinho",
// tag: ["Anel"],

let contador = 0
let valorCarrinho = 0

let produtosCaarrinho = []

document.querySelector('#home').addEventListener('click', function(){
    location.reload()
})


function criarItens(ListaDeProdutos){
    const listaProdutos = document.querySelector('#cards')
    listaProdutos.innerHTML = ''
    for(let i = 0; ListaDeProdutos.length > i; i++){
        const li = document.createElement('li')
        const divImg = document.createElement('div')
        const img = document.createElement('img')
        const p = document.createElement('p')
        const descricao = document.createElement('span')
        const valor = document.createElement('span')
        const btn = document.createElement('button')

        btn.addEventListener('click', function(event){
            let cardId = event.target.id
            for(let j = 0; j < ListaDeProdutos.length; j++){
                if(cardId == ListaDeProdutos[j].id){
                    produtosCaarrinho.push(ListaDeProdutos[j])
                    carrinho(produtosCaarrinho)
    
    
                    valorCarrinho += ListaDeProdutos[j].value
                    document.querySelector('#valorTotal').innerHTML = `R$ ${valorCarrinho.toFixed(2)}`
                }
            }
            contador++
            document.querySelector('#quantidade').innerHTML = `${contador}`
            
            document.querySelector('.cart-empty').style.display = 'none'  
        })
    
        li.classList.add(`item`)
        li.classList.add(`${ListaDeProdutos[i].tag[0]}`)
        divImg.classList.add('allImagem')
        img.src = ListaDeProdutos[i].img
        img.alt = ListaDeProdutos[i].nameItem
        p.innerHTML = ListaDeProdutos[i].nameItem
        descricao.innerHTML = ListaDeProdutos[i].description
        valor.innerHTML = `$R ${ListaDeProdutos[i].value.toFixed(2)}`
        btn.innerHTML = ListaDeProdutos[i].addCart
        btn.classList.add('adicionarAoCarrinho')
        btn.id = ListaDeProdutos[i].id
    
        listaProdutos.appendChild(li)
        li.appendChild(divImg)
        divImg.appendChild(img)
        li.appendChild(p)
        li.appendChild(descricao)
        li.appendChild(valor)
        li.appendChild(btn)
    }
    return listaProdutos
}
criarItens(data)

//todos os itens da lista
const categorias = document.querySelectorAll('.item')

//botões para filtragem
const categoria = document.querySelectorAll('.menu_tags')

for(let i = 0; i < categoria.length; i++){
    categoria[i].addEventListener('click', function(){
        let valorDosBotao = categoria[i].innerHTML
        console.log(valorDosBotao)
        let produtosFiltrados = filtraProdutos(data, valorDosBotao)
        criarItens(produtosFiltrados)
        
    })
}

function filtraProdutos(listaDeProdutos, valorBotao){
    let produtosCategorias = []
    for(let i = 0; listaDeProdutos.length > i; i++){
        if(listaDeProdutos[i].tag[0] === valorBotao){
            produtosCategorias.push(listaDeProdutos[i])
        }
    }
    return produtosCategorias
}

let contadorProdutos = 1
function carrinho(produtosAdd){
    console.log(produtosAdd)
    const listaCarrinho = document.querySelector('.cart-list')
    listaCarrinho.innerHTML = ''
    for(let i = 0; i < produtosAdd.length; i++){
        const li = document.createElement('li')
        const img = document.createElement('img')
        const divImg = document.createElement('div')
        const div = document.createElement('div')
        const nomeProduto = document.createElement('p')
        const precoProduto = document.createElement('span')
        const bntRemove = document.createElement('button')
        const guardaBotoes = document.createElement('div')
        const menos = document.createElement('button')
        const contadorQuantidade = document.createElement('p')
        const mais = document.createElement('button')

        li.classList.add('itensCarrinho')
        img.src = produtosAdd[i].img
        img.alt = produtosAdd[i].nameItem
        divImg.classList.add('divImg')
        div.classList.add('nomeDosItensNoCarrinho')
        nomeProduto.innerHTML = produtosAdd[i].nameItem
        precoProduto.innerHTML = `$R ${produtosAdd[i].value.toFixed(2)}`
        bntRemove.innerHTML = 'Remover item'
        bntRemove.classList.add(produtosAdd[i].id)
        bntRemove.id = produtosAdd[i].id
        guardaBotoes.classList.add('guardaBotoes')
        menos.innerHTML = '-'
        menos.classList.add('botao')
        contadorQuantidade.innerHTML = '1'
        mais.innerHTML = '+'
        mais.classList.add('botao')

        let valorDoProduto = produtosAdd[i].value

        menos.addEventListener('click', function(){
            if(contadorProdutos > 1){
                contadorProdutos --

                contador--
                document.querySelector('#quantidade').innerHTML = `${contador}`
            }
            contadorQuantidade.innerHTML = contadorProdutos
        })

        mais.addEventListener('click', function(){
            contadorProdutos ++
            contadorQuantidade.innerHTML = contadorProdutos

            contador++
            document.querySelector('#quantidade').innerHTML = `${contador}`

        })

        bntRemove.addEventListener('click', function(event){
    
            valorCarrinho -= valorDoProduto
            document.querySelector('#valorTotal').innerHTML = `R$ ${valorCarrinho.toFixed(2)}`
            
            
            
            let removeId = event.target.id
            li.remove()
            for(let j = 0; j < produtosAdd.length; j++){
                if(produtosAdd[j].id == removeId){
                    produtosAdd.splice(j, 1)   
                }
            }

            contador--
            document.querySelector('#quantidade').innerHTML = `${contador}`
            if(contador == 0){
                document.querySelector('.cart-empty').style.display = 'flex'
            }
        })

        listaCarrinho.appendChild(li)
        divImg.appendChild(img)
        li.appendChild(divImg)
        li.appendChild(div)
        div.appendChild(nomeProduto)
        div.appendChild(precoProduto)
        div.appendChild(bntRemove)
        li.appendChild(guardaBotoes)
        guardaBotoes.appendChild(menos)
        guardaBotoes.appendChild(contadorQuantidade)
        guardaBotoes.appendChild(mais)

    }

    return listaCarrinho
}


//pesquisa

const form = document.querySelector('#form')
const input = document.querySelector('#pesquisa')
const botao = document.querySelector('.search-button')


form.addEventListener('submit', function(e){
    let resultadopesquisa = []
    e.preventDefault()
    let valorDaPesquisa = input.value
    for(let i = 0; i < data.length; i++){
        let nome = data[i].nameItem
        if(nome.toUpperCase().includes(valorDaPesquisa.toUpperCase())){
            resultadopesquisa.push(data[i])
        }
    }
    criarItens(resultadopesquisa)
})