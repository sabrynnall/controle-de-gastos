/**
 * 1º Passo: capturar valores OK 
 * 2º Passo: armazenar os valores de alguma forma OK
 * 3º Passo: desenvolver funções que realizam os cálculos OK
 * 4º Passo: atualizar interface
 */

// Armazena os valores inseridos

const controleGastos = {
    orcamento: 0,
    despesas: 0,
    saldo: 0
};

//Identifica os campos input e button

const campoEntradaOrcamento = document.querySelector('.formularioEntradaOrcamento input');
const buttonOrcamento = document.querySelector('.formularioEntradaOrcamento button');

//Aciona a captura do valor inserido através do click
buttonOrcamento.addEventListener('click', capturarValorOrcamento);
//Captura o valor e guarda no controle de gastos
function capturarValorOrcamento() {
    const valorOrcamento = Number(campoEntradaOrcamento.value);
    
    controleGastos.orcamento = valorOrcamento;
    controleGastos.saldo = valorOrcamento;
//Atualiza os campos laterais
    atualizarInterface()
}
//Selecionam os campos nome, valor e botão
const campoNomeDespesa = document.querySelector('.formularioEntradaDespesaNome');
const campoValorDespesa = document.querySelector('.formularioEntradaDespesaValor');
const buttonDespesa = document.querySelector('.formularioEntradaDespesa button');

buttonDespesa.addEventListener('click', capturarValoresDespesa);

function capturarValoresDespesa() {
    const nomeDespesa = campoNomeDespesa.value;
    const valorDespesa = Number(campoValorDespesa.value);

    controleGastos.despesas += valorDespesa;
    controleGastos.saldo -= valorDespesa;
//Atualiza os campos laterais
    atualizarInterface()
//Chamando a função para atualizar os campos de despesa
    adicionarDespesaInterface(nomeDespesa, valorDespesa);
}

//Seleciona os parágrafoos criados na lateral
const orcamento = document.querySelector('.secaoImpressaoResultadosOrcamento p');
const despesas = document.querySelector('.secaoImpressaoResultadosDespesas p');
const saldo = document.querySelector('.secaoImpressaoResultadosSaldo p');

//Atualiza os campos laterais
function atualizarInterface() {
    orcamento.innerText = `+ R$ ${controleGastos.orcamento}`;
    despesas.innerText = `- R$ ${controleGastos.despesas}`;
    saldo.innerText = `R$ ${controleGastos.saldo}`;
}

const listaDespesas = document.querySelector('.containerDespesasLista')

//Adicionando os campos de despesa
function adicionarDespesaInterface(nomeDespesa, valorDespesa) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
//Atualiza na interface o nome da despesa e o valor
    h3.innerText = nomeDespesa;
    p.innerText = `R$ ${valorDespesa}`;

    img.src = 'img/trash.svg';
    img.alt = 'Ícone Lixeira'
//Intercepta o clique na imagem da lixeira e chama a função removerDespesa para apagar
    img.addEventListener('click', removerDespesa)
//Identifica o valor exato da despesa para recalcular os valores caso haja a remoção da despesa
    li.dataset.valor = valorDespesa;
//Informa que o h3, p e img são filhos de li
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(img);

    listaDespesas.appendChild(li);
}
//O .target pega o elemento clicado através do evento e com ele chama-se o .parentNode que pega o pai do evento (li)
function removerDespesa(evento) {
    const despesaClicada = evento.target.parentNode;
//Identifica a despesa clicada
    const valorDespesaClicada = Number(despesaClicada.dataset.valor);
//Remove o valor clicado do total de despesas e adiciona o valor no saldo
    controleGastos.despesas -= valorDespesaClicada;
    controleGastos.saldo += valorDespesaClicada;
//Atualiza os valores nos campos laterais
    atualizarInterface();
    despesaClicada.remove();

}