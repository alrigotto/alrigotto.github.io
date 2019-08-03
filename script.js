
// andre 29/07/2019
const numero = document.getElementById('numero')
const cx_itens = document.getElementById('cx_itens')
const total = document.querySelector('p#total_numeros')
const maior = document.querySelector('p#maior')
const menor = document.querySelector('p#menor')
const soma = document.querySelector('p#soma')
const media = document.querySelector('p#media')
const numeros_vetor = []

var limpa_num = () => {
    numero.value = ''
    numero.focus()
}

//Verifica se o número é vazio, se entre 0 e 100 e se não é repetido. 
function valida_numero(numero_real, string_vazia) {
    if (string_vazia == '') {
        window.alert('Você tem que digitar um número!')
        limpa_num()
        return false
    } else if (numero_real >= 0 && numero_real <= 100) {
        // o número é válido pois está entre 0 e 100.
        return true
    } else {
        if (numero_real < 0 ) {
            window.alert('Digite um número maior ou igual a zero!')
        } else if (numero_real > 100) {
            window.alert('Digite um número menor ou igual a 100!')
        }
        limpa_num()
        return false
    }
}



//Verifica se o número digitado já está na lista.
function numero_repetido(vetor_analisado, valor_teste) {
    if (vetor_analisado.indexOf(valor_teste) == -1) {
        return true
    } else {
        window.alert('Número repetido. Digite outro número!')
        limpa_num()
        return false
    }
}

function calcula_total(vetor_analisado) { //calcula o total de itens e coloca na tela
    total.innerHTML = `Total de números inseridos: <strong>${vetor_analisado.length}</strong>`
}

function calcula_maior(vetor_analisado) { //encontra o maior numero e coloca na tela
    vetor_analisado.sort(function(a, b){return b-a})
    maior.innerHTML = `Maior número: <strong>${vetor_analisado[0]} </strong>`
}

function calcula_menor(vetor_analisado) { //encontra o menor numero e coloca na tela
    vetor_analisado.sort(function(a, b){return a-b})
    menor.innerHTML = `Menor número: <strong>${vetor_analisado[0]} </strong>`
}

function calcula_soma(vetor_analisado) { //calcula a somatoria de todos os numero e coloca na tela
    let somatoria = vetor_analisado.reduce((acu, vet) => (acu + vet), 0)
    soma.innerHTML = `Soma de todos os números: <strong> ${somatoria}</strong>`
}

function calcula_media(vetor_analisado) { //calcula a média de todos os numero e coloca na tela
    let somatoria = vetor_analisado.reduce((acu, vet) => (acu + vet), 0)
    let med = somatoria / vetor_analisado.length
    let medi = med.toFixed(2)
    media.innerHTML = `Média: <strong> ${medi.replace('.', ',')}</strong>`
}
// limpa todos os resultados mostrados quando é adicionado mais um n°
function limpa_dados_analisados() {
    total.innerHTML = 'Total de números inseridos:'
    maior.innerHTML = 'Maior número:'
    menor.innerHTML = 'Menor número:'
    soma.innerHTML = 'Soma de todos os números:'
    media.innerHTML = 'Média:'
}

function adicionar() { //botão "Adicionar"
    var num = Number(numero.value) // converte para inteiro
    limpa_dados_analisados()
    if (valida_numero(num, numero.value)) { // se o numero for valido, vai pra lista.
        if (numero_repetido(numeros_vetor, num)) {
            // cria o elemento option uqe ira para o select
            var item = document.createElement('option') 
            item.text = `Valor ${num} adicionado.` // coloca o texto no option criado acima
            cx_itens.appendChild(item) // adiciona o option no select
            // coloca o numero numa matriz que srá uma imagem dos itens do colocados select
            numeros_vetor.push(num)
            numero.value = ''
        }
    } else {
        return
    }    
}


function analisar() { // Botão "Analisar
    if (numeros_vetor.length == 0) {
        window.alert('A lista está vazia. Digite um número!')
        limpa_num()
        return
    }
    calcula_total(numeros_vetor)
    calcula_maior(numeros_vetor)
    calcula_menor(numeros_vetor)
    calcula_soma(numeros_vetor)
    calcula_media(numeros_vetor)
}

