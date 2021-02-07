import Bd from '../Modules/Bd.js'
import Despesa from '../Modules/Despesa.js'


//  -------- Modal -------- 
let modal = document.getElementById('modal')
modal.style.height = '0px'
modal.style.marginBottom = '0px'
modal.style.visibility = 'hidden'
let visivel = false

//  -------- Titulo Modal -------- 
let tituloModal = document.getElementById('titulo-modal')
tituloModal.style.padding = '0px'
//  


//INSTANCIA DA CLASSE BD
let bd = new Bd

// FUNÇÃO QUE CADASTRA A DESPESA E ENGLOBA AS FUNÇÕES ANTERIORES
window.cadastrarDespesa = ()=>{
    console.log('chamada')

    //GUARDANDO OS DADOS DIGITADOS PELO USUARIO EM SUAS RESPECTIVAS VARIAVEIS
    let ano = document.getElementById('ano')
    let mes = document.getElementById('mes')
    let dia = document.getElementById('dia')
    let tipo = document.getElementById('tipo')
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')

    //INSANCIA DA CLASSE DESPESA ENVIANDO COMO PARAMETRO AS VARIAVEIS ACIMA 
    let despesa = new Despesa(
        ano.value,
        mes.value,
        dia.value,
        tipo.value,
        descricao.value,
        valor.value
    )
    
    // VERIFICANDO SE OS DADOS SÃO VALIDOS COM O METODO DA CLASSE DESPESA VALIDAR DADOS
    if(despesa.validarDados()){

        // SE FOREM VALIDOS GRAVE OS DADOS UTILIZANDO O METODO GRAVAR DA CLASSE BD
        bd.gravar(despesa)

        // SE FOREM VALIDOS MOSTRE UMA MENSAGEM VALIDATIVA
        modal.style.height = '30px'
        modal.style.marginBottom = '13px'
        modal.style.visibility = 'visible'
        modal.style.transition = '.1s'

        tituloModal.style.padding = '10px'
        tituloModal.style.backgroundColor = '#90CCA4'
        tituloModal.innerHTML = '<p>Despesa cadastrada com sucesso</p>'

        modal.style.visibility = 'visible'
        modal.style.transition = '.1s ease'
        
        // DEPOIS DE GRAVAR APAGUE O VALOR DO FORMULARIO
        ano.value = ''
        mes.value = ''
        dia.value = ''
        tipo.value = ''
        descricao.value = ''
        valor.value  = ''
        
        visivel = true

    } else {
        
        // SE FOREM INVALIDOS MOSTRE UMA MENSAGEM INVALIDATIVA
        modal.style.height = '30px'
        modal.style.marginBottom = '13px'
        modal.style.visibility = 'visible'
        modal.style.transition = '.1s'

        tituloModal.style.padding = '10px'
        tituloModal.style.backgroundColor = 'rgb(241, 209, 207)'
        tituloModal.innerHTML = '<p>Existem campos obrigatórios que não foram preechidos</p>'
        modal.style.transition = '.1s ease'

        visivel = true
    }

}


// TRECHO DE CODIGO QUE VERIFICA SE A MENSAGEM DE AVISO ESTA VISIVEL
document.querySelectorAll('.element').forEach(item =>{
    item.addEventListener('click', event => {
        if(visivel){
            modal.style.height = '0px'
            modal.style.marginBottom = '0px'
            modal.style.visibility = 'hidden'
            modal.style.transition = '.1s'
            tituloModal.style.padding = '0px'
        }
    })
})