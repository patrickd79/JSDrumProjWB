window.addEventListener('keydown', playSound);
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    }
  let keys = document.querySelectorAll('.key');
  function removeTransition(e){
    if (e.propertyName !== 'transform'){
        console.log(this);
        this.classList.remove('playing');
    }
  }
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))