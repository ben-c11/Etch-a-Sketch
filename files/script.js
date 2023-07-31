const gridContainer = document.querySelector('#grid-container');

const gridSlider = document.querySelector('#slider');
const gridSliderOutput = document.querySelector('output');

gridSliderOutput.innerText = gridSlider.value + 'x' + gridSlider.value;

function createGrid(){
    //Generate grid square & give each one an ID                        
    let gridSize = parseInt(gridSlider.value);

    for(let i = 0; i < gridSize**2; i++){
        let gridBox = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        gridContainer.insertAdjacentElement('afterbegin', gridBox);
    }
    
}
createGrid()

const hover = document.querySelector('.hover');






