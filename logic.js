function createDiv(container, amount){
    for(let row = 0; row < gridSize; row++){
        const gridRow = document.createElement('div');
        gridRow.className = `row ${row+1}`;
        container.appendChild(gridRow);
        for(let column = 0; column < gridSize; column++){
            const gridColumn = document.createElement('div');
            gridColumn.className = `column ${column+1}`;
            gridRow.appendChild(gridColumn);
        }
    }
}

const gridSize = 16;
const container = document.querySelector('#container');

createDiv(container, gridSize);


