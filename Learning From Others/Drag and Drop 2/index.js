// Drag target
const $draggable = document.querySelector('.draggable');
// Initial coordinates of dragstart
const initMousePos = { x: 0, y: 0 };
// distance to move
const offset = { x: 0, y: 0 };

function move(e) {
  console.log(e.clientX, e.clientY);
  offset.x = e.clientX - initMousePos.x;
  offset.y = e.clientY - initMousePos.y;

  $draggable.style.transform = `translate3d(${offset.x}px, ${offset.y}px, 0)`;
}

$draggable.addEventListener('mousedown', e => {
  $draggable.style.opacity = 0.7;
  initMousePos.x = e.clientX - offset.x;
  initMousePos.y = e.clientY - offset.y;
  document.addEventListener('mousemove', move);
});

$draggable.addEventListener('mouseup', () => {
  $draggable.style.opacity = 1;
  document.removeEventListener('mousemove', move);
});
