const pianoKeys = document.querySelectorAll('.key')

function playSound() {
    new Audio('24-piano-keys\key02.mp3').play()
}


pianoKeys.forEach(pianoKey =>{
    pianoKey.addEventListener('click', playSound)

})