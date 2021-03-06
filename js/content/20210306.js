function modalImageToggle(idx) {
  const targetElm = document.getElementsByClassName('modal-box');

  targetElm[idx].classList.toggle('modal-on');
}

function modalImageOff(idx) {
  const targetElm = document.getElementsByClassName('modal-box');
}

const targetScreenElm = document.getElementsByClassName('screen_shot');
for(let idx = 0; idx < targetScreenElm.length; idx++){
  targetScreenElm[idx].addEventListener('click',() => modalImageToggle(idx));
}

const targetCloseElm = document.getElementsByClassName('modal-box__close');
for(let idx = 0; idx < targetCloseElm.length; idx++){
  targetCloseElm[idx].addEventListener('click',() => modalImageToggle(idx));
}
