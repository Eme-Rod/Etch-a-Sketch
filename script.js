const container = document.querySelector("#container");
const buttonGrid = document.createElement('button');
const grid = document.createElement('div');

grid.setAttribute('id', 'grid');
buttonGrid.setAttribute('id', 'btn-grid');
buttonGrid.textContent = 'New Grid Size';
container.appendChild(buttonGrid);
container.appendChild(grid);

function btn_clear() {
    const allGrid = document.querySelectorAll('.rowDIV');
    allGrid.forEach(element => {
        grid.removeChild(element);
    });

    let newGrid = prompt("What is the size of the new grid?");
    while (parseInt(newGrid) > 100) {
        newGrid = prompt("It must not be bigger than 100")
    }
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
                const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
                e.target.style.backgroundColor = randomColor;
            })
            rowDIV.appendChild(squareDIV);
        }
    grid.appendChild(rowDIV);
    }
}

buttonGrid.addEventListener('click', (e) => {
    btn_clear();
})