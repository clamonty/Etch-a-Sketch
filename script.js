makeGrid(10);

function makeGrid(num) {
  const grid = document.querySelector('.grid-container');
  removeChildren(grid);
  grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      makeSquare();
    }
  }
  grid.style.border = `1px solid black`;
}

document.querySelector('.grid-btn').addEventListener('click', () => {
  let gridSize = prompt(`Enter grid size: `);
  makeGrid(gridSize);
});

// Rainbow button functionality
document.querySelector('.rainbow').addEventListener('click', () => {
  const squares = document.querySelectorAll('.grid-square');
  squares.forEach(square => {
    clearSquare(square);
    square.addEventListener('mouseover', (e) => {
      makeRainbow(e.target);
    });
  });
});

// Grey-scale button functionality
document.querySelector('.grey-scale').addEventListener('click', () => {
  const squares = document.querySelectorAll(`.grid-square`);
  squares.forEach(square => {
    clearSquare(square);
    square.addEventListener(`mouseover`, e => {
      makeBlack(e.target);
    });
  });
});

function makeSquare() {
  const grid = document.querySelector('.grid-container');
  let newDiv = document.createElement('div');
  newDiv.classList.add('grid-square');
  newDiv.addEventListener(`mouseover`, (e) => {
    makeBlack(e.target);
  });
  grid.appendChild(newDiv);
}

function makeBlack(div) {
  div.style.backgroundColor = `black`;
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function getLightness(div) {
  const rgbString = div.getPropertyValue('background-color');
  console.log(rgbString);
}

function makeRainbow(div) {
  div.style.backgroundColor = `rgb(${randomChoice()}, ${randomChoice()}, ${randomChoice()})`;
}

function makeGreyScale(div) {
  
}

// Get random value 0-255
function randomChoice() {
  return Math.floor(Math.random() * 256);
}

function clearSquare(div) {
  div.style.backgroundColor = `#fff`;
}