import Bd from '../Modules/Bd.js'
import Despesa from '../Modules/Despesa.js'

let bd = new Bd

window.carregarDespesas = (despesas = [], filtro = false)=> {

    if(despesas.length == 0 && filtro == false){
        despesas = bd.recuperarRegistros()
    }

    let listaDespesas = document.getElementById('lista-despesas')
    listaDespesas.innerHTML = ''
  

    despesas.forEach(function(d) {

        let linha = listaDespesas.insertRow()


        linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}`

        switch(d.tipo){

            case 'alimentacao': d.tipo = 'Alimentação'
                break

            case 'educacao': d.tipo = 'Educação'
                break
            
            case 'lazer': d.tipo = 'Lazer'
                break
            
            case 'saude': d.tipo = 'Saúde'
                break
            
            case 'transporte': d.tipo = 'Transporte'
                break
            
        }

        linha.insertCell(1).innerHTML = d.tipo
        linha.insertCell(2).innerHTML = d.descricao
        linha.insertCell(3).innerHTML = d.valor

        let btn = document.createElement('button')
        btn.className = 'btn-danger'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id =  `id_despesa_${d.id}`

        btn.onclick = function() {
            let id = this.id.replace('id_despesa_', '')
            bd.remover(id)
            window.location.reload()
        }

        linha.insertCell(4).append(btn)

    })

}


window.pesquisarDespesas = ()=>{

    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

    let despesas = bd.pesquisar(despesa)

    carregarDespesas(despesas, true)
}
