function createDiv(gridRow, gridCol){
    for(let row = 0; row < gridRow; row++){
        for(let column = 0; column < gridCol; column++){
            const grid = document.createElement('div');
            grid.className = `grid ${row+1}x${column+1}`;
            //grid.textContent = `${column+1}`
            container.appendChild(grid);
        }
    }
}

const row = 16;
const column = 16;
const container = document.querySelector('#container');

createDiv(row, column);
const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => grid.addEventListener('mouseenter', () => {
    grid.classList.add('hover');
}));




