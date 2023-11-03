// Capturando os elementos 
let titulo = document.getElementById('titulo')
let link = document.querySelector('a');

// Adicionando conteúdo
titulo.innerText = 'Temas estudados'
link.innerText = 'Site da Proz'

// Capturando os elementos ul e ol
let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')

// Adiciona itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
<li>AWS</li>
<li>JavaScript</li>
<li>Phyton</li>
`
// Adicionando itens com links na lista
listaOrdenada.innerHTML = `
<li><a href="https://prozeducacao.com.br/local_da_unidade/sao-paulo/">PROZ - Sao Paulo </a></li>
  <li><a href="https://prozeducacao.com.br/local_da_unidade/minas-gerais/">PROZ - Minas Gerais </a></li>
  <li><a href="https://prozeducacao.com.br/local_da_unidade/parana/">PROZ - Parana</a></li>
`