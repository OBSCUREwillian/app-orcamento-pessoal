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



        let btnEdit = document.createElement('button')
        btnEdit.className = 'btn-warning btn'
        btnEdit.innerHTML = '<i class="far fa-edit"></i>'
        btnEdit.id = `id_despesa_${d.id}`


        linha.insertCell(4).append(btnEdit)


        let btn = document.createElement('button')
        btn.className = 'btn-danger btn'
        btn.innerHTML = '<i class="fas fa-times"></i>'
        btn.id =  `id_despesa_${d.id}`

        btn.onclick = function() {
            let id = this.id.replace('id_despesa_', '')
            bd.remover(id)
            window.location.reload()
        }
        
        linha.insertCell(5).append(btn)

        
        

        btnEdit.onclick = function(){

            let select = document.createElement('select')

            select.style.height = '30px'

            let options = ['Tipo', 'Alimentação', 'Educação', 'Lazer', 'Saúde', 'Transporte']

            for (let i = 0; i < options.length; i++){
                let option = document.createElement('option')

                option.innerHTML = options[i]

                switch(options[i]){

                    case 'Tipo': options[i] = ''
                        break

                    case 'Alimentação': options[i] = 'alimentacao'
                        break
                    
                    case 'Educação': options[i] = 'educacao'
                        break

                    case 'Lazer': options[i] = 'lazer'
                        break

                    case 'Saúde': options[i] = 'saude'
                        break

                    case 'Transporte': options[i] = 'transporte'
                        break

                }
                option.value = options[i]

                select.appendChild(option)
            }

            let input1 = input()

            let input2 = input()
            input2.style.width = '180px'

            let input3 = input()
            
            input1.placeholder = `${d.dia}/${d.mes}/${d.ano}`
            input2.placeholder = d.descricao
            input3.placeholder = d.valor


            linha.cells[0].innerHTML = ''
            linha.cells[1].innerHTML = ''
            linha.cells[2].innerHTML = ''
            linha.cells[3].innerHTML = ''

            linha.cells[0].append(input1)
            linha.cells[1].append(select)
            linha.cells[2].append(input2)
            linha.cells[3].append(input3)


            btnEdit.style.display = 'none'

            let btnUpdate = document.createElement('button')
            btnUpdate.className = 'btn-warning btn'
            btnUpdate.style.color = '#fff'
            btnUpdate.style.backgroundColor = 'rgb(105, 177, 105)'
            btnUpdate.innerHTML = '<i class="fas fa-check"></i>'
            linha.cells[4].append(btnUpdate)


            btnUpdate.addEventListener('click', function(){
                let resultado = input1.value.split('/')

                let dia = resultado[0]
                let mes = resultado[1]
                let ano = resultado[2]
                let tipo = select.value
                let descricao = input2.value
                let valor = input3.value

                let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

                let despesaAntiga = {dia: d.dia, mes: d.mes, ano: d.ano, tipo: d.tipo, descricao: d.descricao, valor: d.valor}

                bd.updateDespesa(despesa, d.id, despesaAntiga)
                window.location.reload()      
            })
        }

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


function input(){
    let input = document.createElement('input')
    input.type = 'text'
    input.style.height = '25px'
    input.style.width = '105px'
    return input
} 


