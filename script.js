/*Pegando o evento de pressionar a tecla */
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase()); 
});

//pegando o evento de clique no botão qunado for enviado o ritmo
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

    if (song !== '') { //separando por espaços as palavras digitadas no input
        let songArray = song.split('');
        playComposition(songArray);
    }
});

/* função parar tocar o som quando for apertado a tecla com o data-key correspondente */
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)


    if (audioElement) {
        audioElement.currentTime = 0; //tirando o delay dos sons
        audioElement.play(); // tocando o som 
    }

    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

/* função para tocar o ritmo que foi definido no input */
function playComposition(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;
    }
}

