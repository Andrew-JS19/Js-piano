const blackPianoKeys = document.querySelectorAll('.bk');
const whitePianoKeys = document.querySelectorAll('.wk');

function playSound(pianoKey,clr) {

    let Keyname = pianoKey.getAttribute('value')
    if(clr == 'white'){dimKey(pianoKey);}
    console.log(`Keyname is ${Keyname}`)
    filename = `../sound/${clr}keys/key${Keyname}.mp3`
    new Audio(filename).play();
    
}

function dimKey(pianoKey){
    const dimKey = pianoKey.querySelector('.Dim-key');
    dimKey.style.display = 'block'
    setTimeout(() => {
        dimKey.style.display = 'none'
    }, 300);
}




blackPianoKeys.forEach(pianoKey =>{
    pianoKey.addEventListener('click', playSound.bind(null,pianoKey,'black'));
})

whitePianoKeys.forEach(pianoKey =>{
    pianoKey.addEventListener('click', playSound.bind(null,pianoKey,'white'));
})