const container = document.querySelector("#container");
const buttonGrid = document.createElement('button');
const grid = document.createElement('div');

grid.setAttribute('id', 'grid');
buttonGrid.setAttribute('id', 'btn-grid');
buttonGrid.textContent = 'Clear';
container.appendChild(buttonGrid);
container.appendChild(grid);

function btn_clear() {
    const allGrid = document.querySelectorAll('.rowDIV');
    allGrid.forEach(element => {
        grid.removeChild(element);
    });

    const newGrid = prompt("What is the size of the new grid?");
    gridSize(parseInt(newGrid))
}

function gridSize(size) {
    for (let i = 0; i < size; i++) {
        const rowDIV = document.createElement('div');
        rowDIV.classList.add('rowDIV');
        for (let i = 0; i < size; i++) {
            const squareDIV = document.createElement('div');
            squareDIV.classList.add('squareDIV');

            squareDIV.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "red";
            })
            rowDIV.appendChild(squareDIV);
        }
    grid.appendChild(rowDIV);
    }
}

buttonGrid.addEventListener('click', (e) => {
    btn_clear();
})