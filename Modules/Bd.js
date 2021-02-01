// CLASSE BANCO DE DADOS UTILIZANDO O LOCALSTORAGE DO NAVEGADOR DO USUARIO (OS DADOS FICAM ARMAZENADOS NA MAQUINA DO PROPRIO USUARIO E N EM UM BANCO DE DADOS PROPRIAMENTE DITO)
export default class Bd{

    // AQUI O CONSTRUCTOR VERIFICA SE EXISTE UM ITEM NO LOCALSTORAGE CHAMADO 'ID'
    constructor(){

        //NUSCANDO O 'ID' DO LOCAL STORAGE
        let id = localStorage.getItem('id')

        // SE NÃO EXISTIR O 'ID': SET UM ITEM CHAMADO 'ID' COM O VALOR '0' NO LOCALSTORAGE
        if( id === null){
            localStorage.setItem('id', 0)
        }
    }

    //FUNÇÃO QUE BUSCA O 'ID' DO LOCAL STORAGE NOVAMENTE MAS TAMBEM ACRESCENTANDO + 1 NO ITEM 'ID'
    getProximoId(){

        let proximoId = localStorage.getItem('id')

        // COMO O 'ID' RECEBIDO É UM JSON USE PARSEINT PARA TRANSFORMA-LO EM UM DADO ACRESENTANDO +1 
        return parseInt(proximoId) + 1
    }


    //FUNÇÃO QUE ENVIA/PERSISTE OS DADOS DO USUARIO EM LOCALSTORAGE 
    gravar(despesa){

        // CHAME O METODO GETPROXIMOID
        let id = this.getProximoId()

        //SET UM ITEM EM LOCALSTORAGE COM O NUMERO RECEBIDO DO METODO GETPROXIMOID
        localStorage.setItem(id, JSON.stringify(despesa))

        //SET O ITEM 'ID' DE LOCALSTORAGE COM O RECEBIDO DO METODO GETPROXIMOID
        localStorage.setItem('id', id)
    }


    recuperarRegistros(){
        let despesas = []

        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            let despesa = JSON.parse(localStorage.getItem(i))

            if(despesa === null){
                continue
            }

            despesa.id = i
            despesas.push(despesa)
        }

        return despesas
    }

    pesquisar(despesa){
        let despesasFiltradas = []
        
        despesasFiltradas = this.recuperarRegistros()
        
        //ano
        if(despesa.ano != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }

        //mes
        if(despesa.mes != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }

        //dia
        if(despesa.dia != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }

        //tipo
        if(despesa.tipo != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }

        // descrição
        if(despesa.descricao != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }

        //valor
        if(despesa.valor != ''){
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }

        return despesasFiltradas

    }

    remover(id){
        localStorage.removeItem(id)
    }

}