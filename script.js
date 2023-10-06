const container = document.querySelector(`.container`);
container.addEventListener(`click`, trocarCor);

function random(number) {
   return Math.floor(Math.random() * (number+1));
}

function trocarCor(e) {
  var tCor = `rgb(` + random(255) + `,` + random(255) + `,` + random(255) + `)`;
  e.target.style.backgroundColor = tCor;
}

