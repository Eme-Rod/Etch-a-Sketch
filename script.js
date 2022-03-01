const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const rowDIV = document.createElement('div');
    rowDIV.classList.add('rowDIV');
    for (let i = 0; i < 16; i++) {
        const squareDIV = document.createElement('div');
        squareDIV.classList.add('squareDIV');

        squareDIV.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "red";
        })
        rowDIV.appendChild(squareDIV);
    }
    container.appendChild(rowDIV);
}