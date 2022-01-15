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
}

//Identifica os parágrafoos criados na lateral
const orcamento = document.querySelector('.secaoImpressaoResultadosOrcamento p');
const despesas = document.querySelector('.secaoImpressaoResultadosDespesas p');
const saldo = document.querySelector('.secaoImpressaoResultadosSaldo p');

//Atualiza os campos laterais
function atualizarInterface() {
    orcamento.innerText = `+ R$ ${controleGastos.orcamento}`;
    despesas.innerText = `- R$ ${controleGastos.despesas}`;
    saldo.innerText = `R$ ${controleGastos.saldo}`;
}