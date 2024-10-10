let sheet = document.querySelector('#sheet');
let addRowBtn = document.querySelector('#add-row');
let removeRowBtn = document.querySelector('#remove-row');
let addColBtn = document.querySelector('#add-column');

let selectedRow = -1;
let colLimit = 5;
let sheetData = [];

const getColumn = (data, rowIndex) => {
    return data.map((col, index) => {
        return '<input></input>'
    }).join('');
}

const render = () => {
    console.log(sheetData.map((x, index) => {
        return `<div>
            ${getColumn(x, index)}
        </div>`
    }).join(''));
    sheet.innerHTML = sheetData.map((x, index) => {
        return `<div>
            ${getColumn(x, index)}
        </div>`
    }).join('');
}

const addSheetRow = () => {
    console.log('hii')
    let newCol = document.createElement('input');
    sheetData = [...sheetData, [newCol]];
    selectedRow = sheetData.length - 1;
    render();
}

const addSheetColumn = () => {
    console.log('hello');
    let newCol = document.createElement('input');
    console.log(selectedRow, sheetData[selectedRow].length, colLimit);
    if (selectedRow > -1 && sheetData[selectedRow].length < colLimit) {
        console.log('sheet data', sheetData);
        sheetData[selectedRow].push(newCol);
    }
    else if (sheetData[selectedRow].length >= colLimit) {
        addSheetRow();
    }
    else if (selectedRow === -1) {
        addSheetRow();
    }
    render();
}

function call() {
    addRowBtn.addEventListener('click', addSheetRow);
    addColBtn.addEventListener('click', addSheetColumn);
}

call();
