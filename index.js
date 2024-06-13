let myAudio = new Audio();
myAudio.src = 'MOGOVOLONIO.mp3';

function audioo() {
    myAudio.play();
    document.querySelector('.button').remove();
    document.querySelector('.text').remove();
}