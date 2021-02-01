//  _______________________________  ESCONDENDO OS ELEMENTOS  __________________________________________

// ------- Menu expandido -------
let menuExpandido = document.getElementById('menuExpandido')
 menuExpandido.style.visibility = 'hidden'
 menuExpandido.style.height = '0px'
 menuExpandido.style.transition = '.45s ease-in-out'

// ------ Lista menu ------ 
 let listaMenu = document.getElementById('lista-menu') 
 listaMenu.style.visibility = 'hidden'


// ____________________________________________________________________________________________________


// FUNCÇÃO CHAMADA AO CLICAR NO HAMBURGUER
function abrirFecharMenu(){
    verificarVisivel(document.getElementById('menuExpandido').style.visibility)
}


// FUNÇÃO QUE VERIFICA SE O MENU HAMBURGUER E SEU CONTEUDO ESTA VISIVEL
function verificarVisivel(visivel){

    //SE AO CLICAR O HAMBURGUER ESTIVER FECHADO ENTAO ABRA-O
    if(visivel === 'hidden'){
        menuExpandido.style.visibility = 'visible'
        menuExpandido.style.height = '100px'
        menuExpandido.style.transition = '.45s ease-in-out'

        listaMenu.style.visibility = 'visible'
        listaMenu.style.transitionDelay = '0.3s'


    // CASO CONTRARIO FECHE-O
    }else{

        menuExpandido.style.visibility = 'hidden'
        menuExpandido.style.height = '0px'
        menuExpandido.style.transition = '.45s ease-in-out'

        listaMenu.style.visibility = 'hidden'
        listaMenu.style.transitionDelay = '0.2s'
        
    }
}
















