function createHoverCheck(){
    let grids = document.querySelectorAll('.column');
    grids.forEach((grid) => grid.addEventListener('mouseenter', () => {
    grid.classList.add('hover');
}));
}

function createDiv(size){
    container.replaceChildren();
    for(let row = 0; row < size; row++){
        const dRow = document.createElement('div');
        dRow.className = `row ${row+1}`; 
        container.appendChild(dRow);
        for(let column = 0; column < size; column++){
            const col = document.createElement('div');
            col.className = `column ${column+1}`;
            //grid.textContent = `${column+1}`
            dRow.appendChild(col);
        }
    }
}

const size = 32;
const container = document.querySelector('#container');

createDiv(size);
createHoverCheck();


const resetButton = document.querySelector('button');
resetButton.addEventListener('click', () => {
    const answer = prompt('Enter new grid size(1-100)');
    if(answer != null && answer < 101 && answer > 0){
        createDiv(answer);
        createHoverCheck();
    }
});







