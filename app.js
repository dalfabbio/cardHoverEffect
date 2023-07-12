//JAVASCRIPT

const cards = document.querySelectorAll('.card');


function handleOnMouseMove (e) {
  
  //DA PROVARE SE FUNZIONA COSI:
  // const rect = e.getBoundingRect(),
  // x = e.clientX - rect.left,
  // y = e.clientY - rect.top;
  
  const {currentTarget: target} = e;

  const rect = target.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`)
  console.log(x)
}

for (let card of cards) {
    card.onmousemove = e => handleOnMouseMove(e);
  }
