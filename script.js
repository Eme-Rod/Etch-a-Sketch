const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const rowDIV = document.createElement('div');
    rowDIV.classList.add('rowDIV');
    for (let i = 0; i < 16; i++) {
        const squareDIV = document.createElement('div');
        squareDIV.classList.add('squareDIV');
        rowDIV.appendChild(squareDIV);
    }
    container.appendChild(rowDIV);
}