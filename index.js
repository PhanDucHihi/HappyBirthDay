const bodyEl = document.querySelector('body');

bodyEl.addEventListener('mousemove',(event)=>{
  const Xpos = event.offsetX;
  const Ypos = event.offsetY;
  const spanEl = document.createElement('span');
  spanEl.style.left = Xpos + 'px';
  spanEl.style.top = Ypos + 'px';
  const size = Math.random()*100;
  spanEl.style.width = size + 'px';
  spanEl.style.height = size + 'px';
  bodyEl.appendChild(spanEl);
  setTimeout(()=>{
    spanEl.remove();
  },3000)
});