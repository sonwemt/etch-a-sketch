function createDiv(container, amount){
    for(let row = 0; row < gridSize; row++){
        const sRow = document.createElement('div');
        sRow.className = `row ${row+1}`;
        container.appendChild(sRow);
        for(let column = 0; column < gridSize; column++){
            const sColumn = document.createElement('div');
            sColumn.className = `column ${column+1}`;
            sRow.appendChild(sColumn);
        }
    }
}

const gridSize = 16;
const container = document.querySelector('#container');

createDiv(container, gridSize);


