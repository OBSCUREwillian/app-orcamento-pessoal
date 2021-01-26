 document.getElementById('menuExpandido').style.visibility = 'hidden'
 document.getElementById('menuExpandido').style.height = '0px'
 document.getElementById('menuExpandido').style.transition = '.45s ease-in-out'


 document.getElementById('lista-menu').style.visibility = 'hidden'


function abrirFecharMenu(){
    verificarVisivel(document.getElementById('menuExpandido').style.visibility)
}


function verificarVisivel(visivel){

    if(visivel === 'hidden'){

        document.getElementById('menuExpandido').style.visibility = 'visible'
        document.getElementById('menuExpandido').style.height = '100px'
        document.getElementById('menuExpandido').style.transition = '.45s ease-in-out'


         document.getElementById('lista-menu').style.visibility = 'visible'
         document.getElementById('lista-menu').style.transitionDelay = '0.3s'


    }else{
        document.getElementById('menuExpandido').style.visibility = 'hidden'
        document.getElementById('menuExpandido').style.height = '0px'
        document.getElementById('menuExpandido').style.transition = '.45s ease-in-out'


        document.getElementById('lista-menu').style.visibility = 'hidden'
        document.getElementById('lista-menu').style.transitionDelay = '0.2s'
        
 
    }
}

