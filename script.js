
let botao = document.getElementById("botao")
let select = document.getElementById("selectMoedas")



async function converterMoedas(){

    let moedas = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL').then(function(resposta){
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    let inputValorEmReais = Number (document.getElementById("input").value)
    let inputMoedas = document.getElementById("inputMoedas")
    let textoReal = document.getElementById("textoReal")

    if(select.value ==="$ Dólar"){
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US',{style: 'currency', currency: 'USD'})
    }

    if(select.value === "€ Euro"){
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-DE', {style:'currency', currency: 'EUR'})
    }
    
    textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}




function trocaDeMoeda(){
    let textoMoedas = document.getElementById("textoMoedas")
    let bandeiraMoedas = document.getElementById("bandeiraMoedas")

    if(select.value === "$ Dólar"){
        textoMoedas.innerHTML = "Dólar"
        bandeiraMoedas.src = "./img/eua-logo.png"
    }

    if(select.value === "€ Euro"){
        textoMoedas.innerHTML = "-Euro-"
        bandeiraMoedas.src = "./img/euro.png"
    }
    converterMoedas()
}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change",trocaDeMoeda)



