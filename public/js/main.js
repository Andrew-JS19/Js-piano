const blackPianoKeys = document.querySelectorAll('.bk');
const whitePianoKeys = document.querySelectorAll('.wk');

function playSound(Keyname,clr) {
    console.log(`Keyname is ${Keyname}`)
    filename = `../sound/${clr}keys/key${Keyname}.mp3`


    new Audio(filename).play();
}


blackPianoKeys.forEach(pianoKey =>{
    pianoKey.addEventListener('click', playSound.bind(null,pianoKey.getAttribute('value'),'black'));
})

whitePianoKeys.forEach(pianoKey =>{
    pianoKey.addEventListener('click', playSound.bind(null,pianoKey.getAttribute('value'),'white'));
})