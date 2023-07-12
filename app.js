//JAVASCRIPT

const cards = document.querySelectorAll('.card');


function handleOnMouseMove (e) {
  
 
  const {currentTarget: target} = e; //DEFINISCE LA VARIABILE TARGET COME VALORE DELLA PROPRIETà CURRENT TARGET DELL'OGGETTO e; E DA ALLA VARIABILE IL VALORE e. In sostanza mi permette di rimpiazzare e.target perché non sono all'interno di un evento, ma di una funzione che viene utilizzata in un evento

  const rect = target.getBoundingClientRect();
  let x = e.clientX - rect.left
  let y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`)
}

for (let card of cards) {
    setTimeout(()=>
      {card.onmousemove = e => handleOnMouseMove(e)
      }, 100);
  }
