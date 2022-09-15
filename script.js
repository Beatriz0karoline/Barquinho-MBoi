let Barquinho = document.querySelector('#Barquinho')
let MBoi = document.querySelector('#MBoi')

function pular(){
    if(Barquinho.classList != 'animar'){
        Barquinho.classList.add('animar')
    }

    setTimeout(function(){
        Barquinho.classList.remove('animar')
    }, 500)
}

var testarColisao = setInterval( function(){

    var topoBarquinho = parseInt(
     window.getComputedStyle(Barquinho).getPropertyValue('top')
    )
    var EsquerdaMBoi = parseInt(
        window.getComputedStyle(MBoi).getPropertyValue('left')
       )

       if(EsquerdaMBoi < 20 && EsquerdaMBoi > 0 && topoBarquinho >= 130){
        MBoi.style.animation = 'none'
        MBoi.style.display = 'none'
        alert('Você foi afundado por MBoi!')
    }
    

}, 10)