// CLASSE DESPESA QUE RECEBE TODO O VALOR ENVIADO PELO USUARIO
export default class Despesa{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    // FUNÇÃO QUE VERIFICA SE O DADOS RECEBIDOS SÃO VALIDOS - SE FOREM VALIDOS RETORNE TRUE - SE FOREM INVALIDOS RETORNE FALSE
    validarDados(){

        for(let i in this){

            if(this[i] == undefined || this[i] == '' || this[i] == null){
                return false
            }
        }
        return true
    }

}