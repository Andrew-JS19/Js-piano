const pianoKeys = document.querySelectorAll('.key')

function playSound() {
    new Audio('./sound/24-piano-keys/key01.mp3').play()
}


pianoKeys.forEach(pianoKey =>{
    pianoKey.addEventListener('click', playSound)

})