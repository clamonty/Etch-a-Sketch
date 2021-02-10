let greyScale = true;
let rainbow = false;
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


document.querySelector('.rainbow').addEventListener('click', () => {
  rainbow = true;
  greyScale = false;
  const grid = document.querySelector('.grid-container');
  let gridSize = Math.sqrt(grid.childElementCount);
  removeChildren(grid);
  makeGrid(gridSize);
});

// Grey-scale button functionality
// document.querySelector('.grey-scale').addEventListener('click', () => {
//   rainbow = false;
//   greyScale = true;
//   const squares = document.querySelectorAll(`.grid-square`);
//   squares.forEach(square => {
//     clearSquare(square);
//     square.addEventListener(`mouseover`, e => {
//       makeDarker(e.target);
//     });
//   });
// });

document.querySelector('.grey-scale').addEventListener('click', () => {
  rainbow = false;
  greyScale = true;
  const grid = document.querySelector('.grid-container');
  let gridSize = Math.sqrt(grid.childElementCount);
  removeChildren(grid);
  makeGrid(gridSize);
});

function makeSquare() {
  const grid = document.querySelector('.grid-container');
  let newDiv = document.createElement('div');
  newDiv.classList.add('grid-square', '0');
  newDiv.style.backgroundColor = 'rgb(255, 255, 255)';
  newDiv.addEventListener(`mouseover`, (e) => {
    if(greyScale) {
      makeDarker(e.target);
    } else {
      makeRainbow(e.target);
    }
  });
  grid.appendChild(newDiv);
}

function makeDarker(div) {
  if (div.classList.contains('0')) {
    div.style.backgroundColor = `hsl(0, 0%, 90%)`;
    updateClass(div, '0', '1');
  } else if (div.classList.contains('1')) {
    div.style.backgroundColor = `hsl(0, 0%, 80%)`;
    updateClass(div, '1', '2');
  } else if (div.classList.contains('2')) {
    div.style.backgroundColor = `hsl(0, 0%, 70%)`;
    updateClass(div, '2', '3');
  } else if (div.classList.contains('3')) {
    div.style.backgroundColor = `hsl(0, 0%, 60%)`;
    updateClass(div, '3', '4');
  } else if (div.classList.contains('4')) {
    div.style.backgroundColor = `hsl(0, 0%, 50%)`;
    updateClass(div, '4', '5');
  } else if (div.classList.contains('5')) {
    div.style.backgroundColor = `hsl(0, 0%, 40%)`;
    updateClass(div, '5', '6');
  } else if (div.classList.contains('6')) {
    div.style.backgroundColor = `hsl(0, 0%, 30%)`;
    updateClass(div, '6', '7');
  } else if (div.classList.contains('7')) {
    div.style.backgroundColor = `hsl(0, 0%, 20%)`;
    updateClass(div, '7', '8');
  } else if (div.classList.contains('8')) {
    div.style.backgroundColor = `hsl(0, 0%, 10%)`;
    updateClass(div, '8', '9');
  } else if (div.classList.contains('9')) {
    div.style.backgroundColor = `hsl(0, 0%, 0%)`;
    updateClass(div, '9', '10');
  }
}

function removeChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}




// Get random value 0-255
function randomChoice() {
  return Math.floor(Math.random() * 256);
}
function makeRainbow(div) {
  div.style.backgroundColor = `rgb(${randomChoice()}, ${randomChoice()}, ${randomChoice()})`;
}


function clearSquare(div) {
  div.style.backgroundColor = `hsl(0, 0%, 100%)`;
  div.classList[1] = '0';
}

function updateClass(div, oldClass, newClass) {
  div.classList.remove(oldClass);
  div.classList.add(newClass);
}